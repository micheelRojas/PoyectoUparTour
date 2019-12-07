using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ClienteSharpHTTP.Models
{
    public class RestauranteItem
    {
        [Key]
        public int Id {get;set;}

        [Required]
        public string Nombre {get;set;}
 
        [Required]
        public string Direccion {get;set;}

        [Required]
        public long Telefono {get;set;}

        [Required]
        public double Precio {get;set;}

        [Required]
        public double Descuento {get;set;}
    }
}