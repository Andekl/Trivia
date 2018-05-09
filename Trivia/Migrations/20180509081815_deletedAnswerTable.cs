using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Trivia.Migrations
{
    public partial class deletedAnswerTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Answer");

            migrationBuilder.AddColumn<string>(
                name: "CorrectOption",
                table: "Question",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FalseOption1",
                table: "Question",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FalseOption2",
                table: "Question",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CorrectOption",
                table: "Question");

            migrationBuilder.DropColumn(
                name: "FalseOption1",
                table: "Question");

            migrationBuilder.DropColumn(
                name: "FalseOption2",
                table: "Question");

            migrationBuilder.CreateTable(
                name: "Answer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsCorrect = table.Column<bool>(nullable: false),
                    Option = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Answer", x => x.Id);
                });
        }
    }
}
