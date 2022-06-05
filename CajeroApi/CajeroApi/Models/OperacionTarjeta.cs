using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CajeroApi.Models
{
    public class OperacionTarjeta
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int IdTarjeta { get; set; }

        [Required]
        public int IdOperacion { get; set; }

        [Required]
        public DateTime CreationDate { get; set; }

        public float CantidadDinero { get; set; }

        [ForeignKey("IdOperacion")]
        public Operacion Operacion { get; set; }

        [ForeignKey("IdTarjeta")]
        public Tarjeta Tarjeta{ get; set; }

    }
}
