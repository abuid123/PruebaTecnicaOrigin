using System.ComponentModel.DataAnnotations;

namespace CajeroApi.Models
{
    public class Operacion
    {
        [Key]
        public int Id { get; set; }
        public string operacionNombre { get; set; }
    }
}
