using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ClienteSharpHTTP.Models
{
    public class ConductorItem
    {

        [Key]
        public string Identificacion {get;set;}

        [Required]        
        public string Nombre {get;set;}

        [Required]
        public string Apellidos {get;set;}

        [Required, EmailAddress]
        public string Correo {get;set;}
  
        [Required]
        public uint Telefono {get;set;}

        [Required]
        public string Licencia {get;set;}
    }
}