using CajeroApi.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace CajeroApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperacionController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public OperacionController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetOperaciones() 
        {
            var lista = await _db.Operaciones.OrderBy(operacion => operacion.Id).ToListAsync();
            return Ok(lista);
        }

    }
}
