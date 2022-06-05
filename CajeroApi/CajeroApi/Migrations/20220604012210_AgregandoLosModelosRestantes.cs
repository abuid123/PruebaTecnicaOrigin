using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CajeroApi.Migrations
{
    public partial class AgregandoLosModelosRestantes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tarjetas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumeroTarjeta = table.Column<int>(type: "int", nullable: false),
                    Pin = table.Column<int>(type: "int", nullable: false),
                    Balance = table.Column<float>(type: "real", nullable: false),
                    FechaVencimiento = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tarjetas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OperacionTarjetas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdTarjeta = table.Column<int>(type: "int", nullable: false),
                    IdOperacion = table.Column<int>(type: "int", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CantidadDinero = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperacionTarjetas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OperacionTarjetas_Operaciones_IdOperacion",
                        column: x => x.IdOperacion,
                        principalTable: "Operaciones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OperacionTarjetas_Tarjetas_IdTarjeta",
                        column: x => x.IdTarjeta,
                        principalTable: "Tarjetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OperacionTarjetas_IdOperacion",
                table: "OperacionTarjetas",
                column: "IdOperacion");

            migrationBuilder.CreateIndex(
                name: "IX_OperacionTarjetas_IdTarjeta",
                table: "OperacionTarjetas",
                column: "IdTarjeta");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OperacionTarjetas");

            migrationBuilder.DropTable(
                name: "Tarjetas");
        }
    }
}
