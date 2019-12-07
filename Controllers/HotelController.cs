using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClienteSharpHTTP.Models;
//using ReservaSharpHTTP.Models;

namespace HotelSharpHTTP.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class HotelController: ControllerBase
   {
       private readonly ClienteContext _context;
       public HotelController(ClienteContext context)
       {
           _context = context;
           if(_context.HotelItems.Count()==0)
           {
               _context.HotelItems.Add(new HotelItem 
               {Nombre="",Direccion="", Telefono=0, Precio=0, Descuento=0});
            
               _context.SaveChanges();
           }
       }
       [HttpGet]
       public async Task<ActionResult<IEnumerable<HotelItem>>> GetHotelItems()
       {
           return await _context.HotelItems.ToListAsync();
       }
       [HttpGet("{id}")]
       public async Task<ActionResult<HotelItem>> GetHotelItem(int id)
       {
           var hotelItem=await _context.HotelItems.FindAsync(id);
           if(hotelItem==null)
           {
               return NotFound();
           }
           return hotelItem;
       }
       [HttpPost]
       public async Task<ActionResult<HotelItem>> PostHotelItem(HotelItem item)
       {
           if(!ModelState.IsValid)
          {
            return BadRequest(ModelState);
          }
           _context.HotelItems.Add(item);
           await _context.SaveChangesAsync();
           return CreatedAtAction(nameof(GetHotelItem), new {id=item.Id}, item);
       }
       [HttpPut("{id}")]
       public async Task<IActionResult> PutHotelItem(int id, HotelItem item)
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
       public async Task<IActionResult> DeleteHotelItem(int id){
           var HotelItem = await
           _context.HotelItems.FindAsync(id);

           if(HotelItem==null)
           {
               return NotFound();
           }

           _context.HotelItems.Remove(HotelItem);
           await _context.SaveChangesAsync();

           return NoContent();
       }

   }
}