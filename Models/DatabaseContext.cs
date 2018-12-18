using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace CatalogueOfGoods.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(): base()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> opts)
            : base(opts)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();
 
                var connectionString = configuration.GetSection("Data:Products:ConnectionString").Value;
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        public DbSet<Product> Products { get; set; }
    }
}
