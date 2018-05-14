using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Trivia.Migrations
{
    public partial class change : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FalseOption2",
                table: "Question",
                newName: "Option3");

            migrationBuilder.RenameColumn(
                name: "FalseOption1",
                table: "Question",
                newName: "Option2");

            migrationBuilder.AddColumn<string>(
                name: "Option1",
                table: "Question",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Highscore",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Option1",
                table: "Question");

            migrationBuilder.RenameColumn(
                name: "Option3",
                table: "Question",
                newName: "FalseOption2");

            migrationBuilder.RenameColumn(
                name: "Option2",
                table: "Question",
                newName: "FalseOption1");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Highscore",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
