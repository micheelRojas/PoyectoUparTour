using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ClienteSharpHTTP.Models
{
    public class LugarItem
    {

        [Key]
        public int Id {get;set;}

        [Required]        
        public string Nombre {get;set;}

        [Required]
        public string Descripcion {get;set;}

    }
}