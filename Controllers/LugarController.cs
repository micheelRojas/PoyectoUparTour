using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClienteSharpHTTP.Models;
//using ReservaSharpHTTP.Models;

namespace LugarSharpHTTP.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class LugarController: ControllerBase
   {
       private readonly ClienteContext _context;
       public LugarController(ClienteContext context)
       {
           _context = context;
           if(_context.LugarItems.Count()==0)
           {
               _context.LugarItems.Add(new LugarItem 
               {Id=0,Nombre="",Descripcion=""});
            
               _context.SaveChanges();
           }
       }
       [HttpGet]
       public async Task<ActionResult<IEnumerable<LugarItem>>> GetLugarItems()
       {
           return await _context.LugarItems.ToListAsync();
       }
       [HttpGet("{id}")]
       public async Task<ActionResult<LugarItem>> GetLugarItem(int id)
       {
           var lugarItem=await _context.LugarItems.FindAsync(id);
           if(lugarItem==null)
           {
               return NotFound();
           }
           return lugarItem;
       }
       [HttpPost]
       public async Task<ActionResult<LugarItem>> PostLugarItem(LugarItem item)
       {
           if(!ModelState.IsValid)
          {
            return BadRequest(ModelState);
          }
           _context.LugarItems.Add(item);
           await _context.SaveChangesAsync();
           return CreatedAtAction(nameof(GetLugarItem), new {id=item.Id}, item);
       }
       [HttpPut("{id}")]
       public async Task<IActionResult> PutLugarItem(int id, LugarItem item)
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
       public async Task<IActionResult> DeleteLugarItem(int id){
           var LugarItem = await
           _context.LugarItems.FindAsync(id);

           if(LugarItem==null)
           {
               return NotFound();
           }

           _context.LugarItems.Remove(LugarItem);
           await _context.SaveChangesAsync();

           return NoContent();
       }

   }
}