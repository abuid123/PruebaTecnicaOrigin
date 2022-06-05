using Microsoft.EntityFrameworkCore.Migrations;

namespace CajeroApi.Migrations
{
    public partial class CambioTarjeta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Bloqueada",
                table: "Tarjetas",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bloqueada",
                table: "Tarjetas");
        }
    }
}
