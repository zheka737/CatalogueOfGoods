import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Repository } from "../../models/repository";
import { Product } from "../../models/product.model";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import { Colors } from "../../models/product.model";

@Component({
    selector: "createEditProduct",
    templateUrl: "./createEditProduct.component.html"
})
export class CreateEditProductComponent {
    product: Product = new Product(0, "", 0, Colors.Empty);

    constructor(private repo: Repository, private  router: Router, activeRoute: ActivatedRoute) {
        let id = Number.parseInt(activeRoute.snapshot.params["id"]);

        if (id) {
            this.repo.sendRequest(RequestMethod.Get, this.repo.url + "/" + id).subscribe(
                response => this.product = response);
        } else {
            this.product = new Product(0);
        }
    }
    saveProduct() {
        if (this.product.productId === 0) {
            this.repo.createProduct(this.product);
        } else {
            this.repo.replaceProduct(this.product);
        }
        //this.repo.updateProducts();

        //this.router.navigateByUrl("/catalogueOfGoods");

    }

    get allColors(): any[] {
        return this.repo.allColors;
    }
}