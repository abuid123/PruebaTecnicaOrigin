using CajeroApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CajeroApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>option):base(option)
        {

        }

        public DbSet<Operacion> Operaciones { get; set; }
        public DbSet<OperacionTarjeta> OperacionTarjetas { get; set; }
        public DbSet<Tarjeta> Tarjetas { get; set; }
    }
}
