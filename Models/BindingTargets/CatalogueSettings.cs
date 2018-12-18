using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatalogueOfGoods.Models.BindingTargets
{
    public class CatalogueSettings
    {
        public string Name { get; set; }

        public long? Quantity { get; set; }

        public int? Color { get; set; }

        public string SortColumn { get; set; }

        public bool? DescOrder { get; set; }
    }
}
