using Microsoft.EntityFrameworkCore;

namespace ClienteSharpHTTP.Models
{
    public class ClienteContext: DbContext
    {
        public ClienteContext(DbContextOptions<ClienteContext> options):
        base(options)
        {

        }
        public DbSet<ClienteItem> ClienteItems {get;set;}
        public DbSet<ReservaItem> ReservaItems {get;set;}
        public DbSet<LugarItem> LugarItems {get;set;}
        public DbSet<HotelItem> HotelItems {get;set;}
        public DbSet<RestauranteItem> RestauranteItems {get;set;}
        public DbSet<ConductorItem> ConductorItems {get;set;}
        public DbSet<VehiculoItem> VehiculoItems {get;set;}
    }
}