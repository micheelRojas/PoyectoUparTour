using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClienteSharpHTTP.Models;

namespace VehiculoSharpHTTP.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class VehiculoController: ControllerBase
   {
       private readonly ClienteContext _context;
       public VehiculoController(ClienteContext context)
       {
           _context = context;
           if(_context.VehiculoItems.Count()==0)
           {
               _context.VehiculoItems.Add(new VehiculoItem 
               {Placa="MNG321",Modelo="1002483121",Marca="Ferrari", Soat="1212", Tecnomecanica="tretw", Capacidad=0});
            
               _context.SaveChanges();
           }
       }
       [HttpGet]
       public async Task<ActionResult<IEnumerable<VehiculoItem>>> GetVehiculoItems()
       {
           return await _context.VehiculoItems.ToListAsync();
       }
       [HttpGet("{placa}")]
       public async Task<ActionResult<VehiculoItem>> GetVehiculoItem(string placa)
       {
           var vehiculoItem=await _context.VehiculoItems.FindAsync(placa);
           if(vehiculoItem==null)
           {
               return NotFound();
           }
           return vehiculoItem;
       }
       [HttpPost]
       public async Task<ActionResult<VehiculoItem>> PostVehiculoItem(VehiculoItem item)
       {
           if(!ModelState.IsValid)
          {
            return BadRequest(ModelState);
          }
           _context.VehiculoItems.Add(item);
           await _context.SaveChangesAsync();
           return CreatedAtAction(nameof(GetVehiculoItem), new {id=item.Placa}, item);
       }
       [HttpPut("{placa}")]
       public async Task<IActionResult> PutVehiculoItem(string placa, VehiculoItem item)
       {
           if(placa!=item.Placa)
           {
               return BadRequest();
           }

           _context.Entry(item).State = EntityState.Modified;
           await _context.SaveChangesAsync();

           return NoContent();
       }
       [HttpDelete("{placa}")]
       public async Task<IActionResult> DeleteVehiculoItem(string placa){
           var VehiculoItem = await
           _context.VehiculoItems.FindAsync(placa); 

           if(VehiculoItem==null)
           {
               return NotFound();
           }

           _context.VehiculoItems.Remove(VehiculoItem);
           await _context.SaveChangesAsync();

           return NoContent();
       }

   }
}