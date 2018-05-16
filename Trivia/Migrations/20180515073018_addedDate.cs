using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Trivia.Migrations
{
    public partial class addedDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Highscore_AspNetUsers_UserId",
                table: "Highscore");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Highscore",
                newName: "ApplicationUserId");

            migrationBuilder.RenameIndex(
                name: "IX_Highscore_UserId",
                table: "Highscore",
                newName: "IX_Highscore_ApplicationUserId");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Highscore",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddForeignKey(
                name: "FK_Highscore_AspNetUsers_ApplicationUserId",
                table: "Highscore",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Highscore_AspNetUsers_ApplicationUserId",
                table: "Highscore");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Highscore");

            migrationBuilder.RenameColumn(
                name: "ApplicationUserId",
                table: "Highscore",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Highscore_ApplicationUserId",
                table: "Highscore",
                newName: "IX_Highscore_UserId");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Highscore_AspNetUsers_UserId",
                table: "Highscore",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
