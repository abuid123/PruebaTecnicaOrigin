using CajeroApi.Data;
using CajeroApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace CajeroApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarjetaController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public TarjetaController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<Tarjeta>))]
        [ProducesResponseType(500)]//server error
        public async Task<IActionResult> GetTarjetas() 
        {
            var lista = await _db.Tarjetas.OrderBy(tarjetas => tarjetas.Id).ToListAsync();
            return Ok(lista);
        }

        [HttpGet("{numeroTarjeta:long}")]
        [ProducesResponseType(200, Type = typeof(Tarjeta))]
        [ProducesResponseType(404)]//not found
        [ProducesResponseType(400)]//bad request
        public async Task<IActionResult> GetTarjeta(long numeroTarjeta)
        {
            if (numeroTarjeta.ToString().Length != 16)
            {
                return BadRequest();
            }
            var tarjeta = await _db.Tarjetas.FirstOrDefaultAsync(tarjeta => tarjeta.NumeroTarjeta == numeroTarjeta.ToString());
            if(tarjeta == null)
            {
                return NotFound();
            }
            return Ok(tarjeta);
        }

        [HttpPost]
        public async Task<IActionResult> BloquearTarjeta([FromBody] JsonElement numeroTarjeta) 
        {
            string jsonString = numeroTarjeta.ToString();

            var result = JsonConvert.DeserializeObject<Tarjeta>(jsonString);

            if(result == null) { return NoContent(); };

            var tarjetaAModificar = await _db.Tarjetas.FirstOrDefaultAsync(tarjeta => tarjeta.NumeroTarjeta == result.NumeroTarjeta);
            tarjetaAModificar.Bloqueada = true;

            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("ChequearPin")]
        public async Task<IActionResult> ChequearPin([FromBody] JsonElement numeroPin)
        {
            string jsonString = numeroPin.ToString();

            var result = JsonConvert.DeserializeObject<Tarjeta>(jsonString);

            if (result == null) { return NoContent(); };

            var tarjetaABuscar = await _db.Tarjetas.FirstOrDefaultAsync(tarjeta => tarjeta.NumeroTarjeta == result.NumeroTarjeta && tarjeta.Pin == result.Pin);
            if (tarjetaABuscar != null) 
            {
                return Ok(tarjetaABuscar);
            }
            return NotFound();
        }

        [HttpPost("RetirarDinero")]
        public async Task<IActionResult> RetirarDinero([FromBody] JsonElement dineroARetirar) 
        {
            string jsonString = dineroARetirar.ToString();

            var result = JsonConvert.DeserializeObject<Tarjeta>(jsonString);

            if(result == null) { return NoContent(); };

            var tarjetaABuscar = await _db.Tarjetas.FirstOrDefaultAsync(tarjeta => tarjeta.NumeroTarjeta == result.NumeroTarjeta);
            if(tarjetaABuscar == null)
                return NotFound();
            if (tarjetaABuscar.Balance - result.Balance > 0)
            {
                tarjetaABuscar.Balance = tarjetaABuscar.Balance - result.Balance;
                await _db.SaveChangesAsync();
                return Ok();
            }
            else {
                return BadRequest();
            }
        }
    }
}
