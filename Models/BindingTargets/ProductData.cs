using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CatalogueOfGoods.Models.BindingTargets
{
    public class ProductData
    {

        //[Required]
        //[Range(0, Int32.MaxValue)]
        public long ProductId { get; set; }

        //[Required]
        public string Name { get; set; }

        //[Range(0, 1000000)]
        public long Quantity { get; set; }

       // [Required]
        public int Color { get; set; }

        public Product Product {get
        {
            return new Product()
            {
                ProductId = this.ProductId,
                Name = this.Name,
                Color = (Colors)this.Color,
                Quantity = this.Quantity
            };
        }}
    }
}
