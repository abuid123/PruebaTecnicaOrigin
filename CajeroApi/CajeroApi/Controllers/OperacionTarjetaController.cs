using CajeroApi.Data;
using CajeroApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text.Json;
using System.Threading.Tasks;

namespace CajeroApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperacionTarjetaController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public OperacionTarjetaController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public async Task<IActionResult> RealizarOperacion([FromBody] JsonElement operacion) 
        {
            string jsonString = operacion.ToString();
            var result = new OperacionTarjeta();
            try
            {
               result = JsonConvert.DeserializeObject<OperacionTarjeta>(jsonString);
            }
            catch (System.Exception e)
            {

                throw e;
            }
            
            if (result == null) { return NoContent(); };

            await _db.AddAsync(result);
            await _db.SaveChangesAsync();
            return Ok(result);
        }
    }
}
