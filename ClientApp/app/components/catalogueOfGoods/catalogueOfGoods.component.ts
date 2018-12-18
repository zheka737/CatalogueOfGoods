import { Component } from "@angular/core";
import { Repository } from "../../models/repository";
import { Product } from "../../models/product.model";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import "../../models/repository";
import { Colors } from "../../models/product.model";

@Component({
    selector: "catalogue-of-goods",
    templateUrl: "./catalogueOfGoods.component.html",
})
export class CatalogueOfGoodsComponent
{
    showFilterSettings: boolean = false;

    constructor(private repo: Repository) {
        repo.updateProducts();

    }

    get products(): Product[] {
      return this.repo.products;
    }

    sortByName() {
        if (this.repo.catalogueSettings.sortColumn === "name") {
            this.repo.catalogueSettings.descOrder = !this.repo.catalogueSettings.descOrder;
            this.repo.updateProducts();
        } else {
            this.repo.catalogueSettings.Reset();
            this.repo.catalogueSettings.sortColumn = "name";
            this.repo.updateProducts();
        }

    }

    sortByQuantity() {
        
        if (this.repo.catalogueSettings.sortColumn === "quantity") {
            this.repo.catalogueSettings.descOrder = !this.repo.catalogueSettings.descOrder;
            this.repo.updateProducts();
        } else {
            this.repo.catalogueSettings.Reset();
            this.repo.catalogueSettings.sortColumn = "quantity";
            this.repo.updateProducts();
        }
    }

    sortByColor() {
       
        if (this.repo.catalogueSettings.sortColumn === "color") {
            this.repo.catalogueSettings.descOrder = !this.repo.catalogueSettings.descOrder;
            this.repo.updateProducts();
        } else {
            this.repo.catalogueSettings.Reset();
            this.repo.catalogueSettings.sortColumn = "color";
            this.repo.updateProducts();
        }
    }

    getColorName(product: Product): string {
        return Colors[product.color];
    }

    filterSwitch() {
        this.showFilterSettings = !this.showFilterSettings;
    }
}