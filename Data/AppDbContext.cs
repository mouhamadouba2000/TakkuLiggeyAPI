using Microsoft.EntityFrameworkCore;
using TakkuLiggeyAPI.Models;

namespace TakkuLiggeyAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        //public DbSet<Worker> Workers { get; set; }
        //public DbSet<Review> Reviews { get; set; }
        public DbSet<WorkType> WorkTypes { get; set; }
        //public DbSet<Location> Locations { get; set; }
    }
}
