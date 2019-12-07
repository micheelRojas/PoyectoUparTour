using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ClienteSharpHTTP.Models
{
    public class ReservaItem
    {
        [JsonProperty("id")]
        public int Id {get;set;}

        [Required]
        public string ClienteId {get;set;}

        [Required]
        public bool Estado {get;set;}

        [Required]
        public int CantidadPersonas {get;set;}

        [Required]
        public string Fecha {get;set;}

        [Required]
        public string Hora {get;set;}
    }
}