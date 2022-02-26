using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace contractor_web_api.Migrations.Communication
{
    public partial class CommunicationDataUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "name",
                table: "Communications");

            migrationBuilder.AddColumn<string>(
                name: "fromUserName",
                table: "Communications",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "message",
                table: "Communications",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "time",
                table: "Communications",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "toUserName",
                table: "Communications",
                type: "nvarchar(25)",
                maxLength: 25,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "fromUserName",
                table: "Communications");

            migrationBuilder.DropColumn(
                name: "message",
                table: "Communications");

            migrationBuilder.DropColumn(
                name: "time",
                table: "Communications");

            migrationBuilder.DropColumn(
                name: "toUserName",
                table: "Communications");

            migrationBuilder.AddColumn<string>(
                name: "name",
                table: "Communications",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
