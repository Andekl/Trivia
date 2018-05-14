using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Trivia.Migrations
{
    public partial class change2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Highscore",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Highscore_UserId",
                table: "Highscore",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Highscore_AspNetUsers_UserId",
                table: "Highscore",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Highscore_AspNetUsers_UserId",
                table: "Highscore");

            migrationBuilder.DropIndex(
                name: "IX_Highscore_UserId",
                table: "Highscore");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Highscore",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
