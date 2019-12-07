using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClienteSharpHTTP.Models;

namespace ClienteSharpHTTP.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class ConductorController: ControllerBase
   {
       private readonly ClienteContext _context;
       public ConductorController(ClienteContext context)
       {
           _context = context;
           if(_context.ConductorItems.Count()==0)
           {
               _context.ConductorItems.Add(new ConductorItem 
               {Identificacion="1002483121",Nombre="Juan", Apellidos="Mendoza Vega", Correo="juan@gmail.com", Telefono=3423456412, Licencia="2HG04"});
               
               _context.SaveChanges();
           }
       }
       [HttpGet]
       public async Task<ActionResult<IEnumerable<ConductorItem>>> GetConductorItems()
       {
           return await _context.ConductorItems.ToListAsync();
       }
       [HttpGet("{identificacion}")]
       public async Task<ActionResult<ConductorItem>> GetConductorItem(string identificacion)
       {
           var conductorItem=await _context.ConductorItems.FindAsync(identificacion);
           if(conductorItem==null)
           {
               return NotFound();
           }
           return conductorItem;
       }
       [HttpPost]
       public async Task<ActionResult<ConductorItem>> PostConductorItem(ConductorItem item)
       {
          if(!ModelState.IsValid)
          {
            return BadRequest("Error");
          }
       
          //var clienteItem = await _context.ClienteItems.FindAsync(id);

           //if(clienteItem!=null)
           //{
             //  return BadRequest("Ya la persona esta registrada");
           //} 

           _context.ConductorItems.Add(item);
           await _context.SaveChangesAsync();
           return CreatedAtAction(nameof(GetConductorItem), new {id=item.Identificacion}, item);
          
       }
       [HttpPut("{identificacion}")]
       public async Task<IActionResult> PutConductorItem(string identificacion, ConductorItem item)
       {
           if(identificacion!=item.Identificacion)
           {
               return BadRequest();
           }

           _context.Entry(item).State = EntityState.Modified;
           await _context.SaveChangesAsync();

           return NoContent();
       }
       [HttpDelete("{identificacion}")]
       public async Task<IActionResult> DeleteConductorItem(string identificacion){
           var ConductorItem = await
           _context.ConductorItems.FindAsync(identificacion);

           if(ConductorItem==null)
           {
               return NotFound();
           }

           _context.ConductorItems.Remove(ConductorItem);
           await _context.SaveChangesAsync();

           return NoContent();
       }

   }
}