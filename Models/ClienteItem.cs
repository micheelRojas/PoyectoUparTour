using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClienteSharpHTTP.Models
{
    public class ClienteItem
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
        public string Contrasena {get;set;}

        [Required]
        public string Direccion {get;set;}
  
        [Required]
        public uint Telefono {get;set;}
    }
}