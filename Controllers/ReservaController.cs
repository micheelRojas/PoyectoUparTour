using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClienteSharpHTTP.Models;
//using ReservaSharpHTTP.Models;

namespace ReservaSharpHTTP.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class ReservaController: ControllerBase
   {
       private readonly ClienteContext _context;
       public ReservaController(ClienteContext context)
       {
           _context = context;
           if(_context.ReservaItems.Count()==0)
           {
               _context.ReservaItems.Add(new ReservaItem 
               {Id=0,ClienteId="1002483121",Estado=false, CantidadPersonas=0, Fecha="00/00/0000", Hora="00:00"});
            
               _context.SaveChanges();
           }
       }
       [HttpGet]
       public async Task<ActionResult<IEnumerable<ReservaItem>>> GetReservaItems()
       {
           return await _context.ReservaItems.ToListAsync();
       }
       [HttpGet("{id}")]
       public async Task<ActionResult<ReservaItem>> GetReservaItem(int id)
       {
           var reservaItem=await _context.ReservaItems.FindAsync(id);
           if(reservaItem==null)
           {
               return NotFound();
           }
           return reservaItem;
       }
       [HttpPost]
       public async Task<ActionResult<ReservaItem>> PostReservaItem(ReservaItem item)
       {
           if(!ModelState.IsValid)
          {
            return BadRequest(ModelState);
          }
           _context.ReservaItems.Add(item);
           await _context.SaveChangesAsync();
           return CreatedAtAction(nameof(GetReservaItem), new {id=item.Id}, item);
       }
       [HttpPut("{id}")]
       public async Task<IActionResult> PutReservaItem(int id, ReservaItem item)
       {
           if(id!=item.Id)
           {
               return BadRequest();
           }

           _context.Entry(item).State = EntityState.Modified;
           await _context.SaveChangesAsync();

           return NoContent();
       }
       [HttpDelete("{id}")]
       public async Task<IActionResult> DeleteReservaItem(int id){
           var ReservaItem = await
           _context.ReservaItems.FindAsync(id);

           if(ReservaItem==null)
           {
               return NotFound();
           }

           _context.ReservaItems.Remove(ReservaItem);
           await _context.SaveChangesAsync();

           return NoContent();
       }

   }
}