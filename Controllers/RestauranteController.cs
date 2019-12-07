using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClienteSharpHTTP.Models;
//using ReservaSharpHTTP.Models;

namespace RestauranteSharpHTTP.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class RestauranteController: ControllerBase
   {
       private readonly ClienteContext _context;
       public RestauranteController(ClienteContext context)
       {
           _context = context;
           if(_context.RestauranteItems.Count()==0)
           {
               _context.RestauranteItems.Add(new RestauranteItem 
               {Nombre="",Direccion="", Telefono=0, Precio=0, Descuento=0});
            
               _context.SaveChanges();
           }
       }
       [HttpGet]
       public async Task<ActionResult<IEnumerable<RestauranteItem>>> GetRestauranteItems()
       {
           return await _context.RestauranteItems.ToListAsync();
       }
       [HttpGet("{id}")]
       public async Task<ActionResult<RestauranteItem>> GetRestauranteItem(int id)
       {
           var restauranteItem=await _context.RestauranteItems.FindAsync(id);
           if(restauranteItem==null)
           {
               return NotFound();
           }
           return restauranteItem;
       }
       [HttpPost]
       public async Task<ActionResult<RestauranteItem>> PostRestauranteItem(RestauranteItem item)
       {
           if(!ModelState.IsValid)
          {
            return BadRequest(ModelState);
          }
           _context.RestauranteItems.Add(item);
           await _context.SaveChangesAsync();
           return CreatedAtAction(nameof(GetRestauranteItem), new {id=item.Id}, item);
       }
       [HttpPut("{id}")]
       public async Task<IActionResult> PutRestauranteItem(int id, RestauranteItem item)
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
       public async Task<IActionResult> DeleteRestauranteItem(int id){
           var RestauranteItem = await
           _context.RestauranteItems.FindAsync(id);

           if(RestauranteItem==null)
           {
               return NotFound();
           }

           _context.RestauranteItems.Remove(RestauranteItem);
           await _context.SaveChangesAsync();

           return NoContent();
       }

   }
}