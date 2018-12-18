using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace CatalogueOfGoods.Models
{
    public class Product
    {
        [Key]
        public long ProductId { get; set; }

        [Required]
        public string Name { get; set; }

        [Range(0, 1000000)]
        public long Quantity { get; set; }

        [Required]
        public Colors Color { get; set; }

    }
    public enum Colors: int
    {
        Empty = 0, Red = 1, Orange = 2, Yellow = 3
            , Green = 4, Blue = 5, Indigo = 6, Violet =7
    };



}
