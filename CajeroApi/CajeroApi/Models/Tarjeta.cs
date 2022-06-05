using System;
using System.ComponentModel.DataAnnotations;

namespace CajeroApi.Models
{
    public class Tarjeta
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string NumeroTarjeta { get; set; }
        [Required]
        public int Pin { get; set; }
        public float Balance { get; set; }
        public DateTime FechaVencimiento { get; set; }

        public bool Bloqueada { get; set; }
    }
}
