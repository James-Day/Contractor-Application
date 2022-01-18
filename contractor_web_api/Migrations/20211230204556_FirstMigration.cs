using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace contractor_web_api.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Linkedin = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    SSNLastFour = table.Column<int>(type: "int", maxLength: 4, nullable: true),
                    highest_education = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    GraduationYear = table.Column<int>(type: "int", maxLength: 4, nullable: true),
                    TotalExperience = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Relocation = table.Column<bool>(type: "bit", maxLength: 1, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
