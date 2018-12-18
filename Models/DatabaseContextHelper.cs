using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CatalogueOfGoods.Models
{
    public static class DatabaseContextHelper
    {
        public static void SeedData()
        {
            using (DatabaseContext db = new DatabaseContext())
            {
                db.Database.Migrate();

                if (!db.Products.Any())
                {

                    db.Products.Add(new Product
                    {
                        Name = "Shovel", Quantity = 10, Color = Colors.Green
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Rake",
                        Quantity = 15,
                        Color = Colors.Blue
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Hoe",
                        Quantity = 20,
                        Color = Colors.Orange
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Fork",
                        Quantity = 25,
                        Color = Colors.Violet
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Watering can",
                        Quantity = 30,
                        Color = Colors.Indigo
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Sprinkler",
                        Quantity = 35,
                        Color = Colors.Empty
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Hose",
                        Quantity = 40,
                        Color = Colors.Violet
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Strimmer",
                        Quantity = 45,
                        Color = Colors.Blue
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Wheelbarrow",
                        Quantity = 50,
                        Color = Colors.Green
                    });

                    db.Products.Add(new Product
                    {
                        Name = "Lawnmower",
                        Quantity = 50,
                        Color = Colors.Green
                    });

                    db.SaveChanges();
                }

            }
        }
    }
}
