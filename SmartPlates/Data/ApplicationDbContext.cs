using Microsoft.EntityFrameworkCore;

namespace SmartPlates.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // Add DbSets here, for example:
        // public DbSet<MenuItem> MenuItems { get; set; }
    }
}
