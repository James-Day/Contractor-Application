using contractor_web_api.Models;
using Microsoft.EntityFrameworkCore;

namespace contractor_web_api.Data
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> opt) : base(opt)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
