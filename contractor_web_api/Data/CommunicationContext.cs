using contractor_web_api.Models;
using Microsoft.EntityFrameworkCore;
namespace contractor_web_api.Data
{
    public class CommunicationContext : DbContext
    {
        public CommunicationContext(DbContextOptions<CommunicationContext> opt) : base(opt)
        {

        }
        public DbSet<Communication> Communications { get; set; }
    }
}


