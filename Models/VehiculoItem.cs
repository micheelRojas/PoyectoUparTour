using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ClienteSharpHTTP.Models
{
    public class VehiculoItem
    {
        [Key]
        public string Placa {get;set;}

        [Required]
        public string Modelo {get;set;}

        [Required]
        public string Marca {get;set;}

        [Required]
        public string Soat {get;set;}

        [Required]
        public string Tecnomecanica {get;set;}

        [Required]
        public int Capacidad {get;set;}
    }
}