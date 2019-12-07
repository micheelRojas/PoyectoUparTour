using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoUparTour.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClienteItems",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: false),
                    Apellidos = table.Column<string>(nullable: false),
                    Correo = table.Column<string>(nullable: false),
                    Contrasena = table.Column<string>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClienteItems", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "ConductorItems",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: false),
                    Apellidos = table.Column<string>(nullable: false),
                    Correo = table.Column<string>(nullable: false),
                    Telefono = table.Column<long>(nullable: false),
                    Licencia = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConductorItems", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "HotelItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<long>(nullable: false),
                    Precio = table.Column<double>(nullable: false),
                    Descuento = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HotelItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LugarItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    Descripcion = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LugarItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReservaItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClienteId = table.Column<string>(nullable: false),
                    Estado = table.Column<bool>(nullable: false),
                    CantidadPersonas = table.Column<int>(nullable: false),
                    Fecha = table.Column<string>(nullable: false),
                    Hora = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReservaItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RestauranteItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<long>(nullable: false),
                    Precio = table.Column<double>(nullable: false),
                    Descuento = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RestauranteItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VehiculoItems",
                columns: table => new
                {
                    Placa = table.Column<string>(nullable: false),
                    Modelo = table.Column<string>(nullable: false),
                    Marca = table.Column<string>(nullable: false),
                    Soat = table.Column<string>(nullable: false),
                    Tecnomecanica = table.Column<string>(nullable: false),
                    Capacidad = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehiculoItems", x => x.Placa);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClienteItems");

            migrationBuilder.DropTable(
                name: "ConductorItems");

            migrationBuilder.DropTable(
                name: "HotelItems");

            migrationBuilder.DropTable(
                name: "LugarItems");

            migrationBuilder.DropTable(
                name: "ReservaItems");

            migrationBuilder.DropTable(
                name: "RestauranteItems");

            migrationBuilder.DropTable(
                name: "VehiculoItems");
        }
    }
}
