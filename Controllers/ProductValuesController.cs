using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CatalogueOfGoods.Models;
using CatalogueOfGoods.Models.BindingTargets;
using Microsoft.AspNetCore.Mvc;

namespace CatalogueOfGoods.Controllers
{
    [Route("api/products")]
    public class ProductValuesController:Controller
    {
        private DatabaseContext _db;

        public ProductValuesController(DatabaseContext db)
        {
            _db = db;
        }

        [HttpGet("{id}")]
        public Product GetProduct(long id)
        {
            return _db.Products.Find(id);
        }

        [HttpGet]
        public IEnumerable<Product> GetProducts([FromQuery] CatalogueSettings catalogueSettings)
        {

            if (ModelState.IsValid)
            {
                IQueryable<Product> query = _db.Products;

                if (catalogueSettings.Name != null)
                {
                    query = query.Where(e => e.Name == catalogueSettings.Name);
                }

                if (catalogueSettings.Quantity != null)
                {
                    query = query.Where(e => e.Quantity == catalogueSettings.Quantity);
                }

                if (catalogueSettings.Color != null)
                {
                    query = query.Where(e => e.Color == (Colors)catalogueSettings.Color);
                }

                if (!string.IsNullOrEmpty(catalogueSettings.SortColumn))
                {
                    if (catalogueSettings.DescOrder != null && catalogueSettings.DescOrder.Value == true)
                    {
                        if (catalogueSettings.SortColumn == "name")
                        {
                            query = query.OrderByDescending(e => e.Name);
                        }
                        else if (catalogueSettings.SortColumn == "quantity")
                        {
                            query = query.OrderByDescending(e => e.Quantity);
                        }
                        else if (catalogueSettings.SortColumn == "color")
                        {
                            query = query.OrderByDescending(e => e.Color);
                        }
                    }
                    else
                    {
                        if (catalogueSettings.SortColumn == "name")
                        {
                            query = query.OrderBy(e => e.Name);
                        }
                        else if (catalogueSettings.SortColumn == "quantity")
                        {
                            query = query.OrderBy(e => e.Quantity);
                        }
                        else if (catalogueSettings.SortColumn == "color")
                        {
                            query = query.OrderBy(e => e.Color);
                        }
                    }
                }

                IEnumerable<Product> result = query.ToList();

                return result;
            }
            else
            {
                return null;
            }


        }

        [HttpPost]
        public IActionResult CreateProduct([FromBody] ProductData productData)
        {
            if (ModelState.IsValid)
            {
                Product product = productData.Product;
                _db.Add(product);
                _db.SaveChanges();
                return Ok(product.ProductId);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        [HttpPut("{id}")]
        public IActionResult ReplaceProduct(long id, [FromBody] ProductData productData)
        {
            if (ModelState.IsValid)
            {
                Product product = productData.Product;
                product.ProductId = id;
                _db.Update(product);
                _db.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteProduct(long id)
        {
            _db.Products.Remove(new Product() {ProductId = id});
            _db.SaveChanges();
        }
    }
}
