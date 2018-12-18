import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Repository } from "../../models/repository";
import { Product } from "../../models/product.model";
import { Http, RequestMethod, Request, Response } from "@angular/http";

@Component({
    selector: "deleteProductComponent",
    templateUrl: "./deleteProduct.component.html"
})
export class DeleteProductComponent {
    product: Product;
    idOfProductToDelete: number = 0; 

    constructor(private repo: Repository, private router: Router, activeRoute: ActivatedRoute) {
        let id = Number.parseInt(activeRoute.snapshot.params["id"]);

        if (id) {
            this.idOfProductToDelete =  id;
        } else {
           throw "Id is not specified";
        }

        this.repo.sendRequest(RequestMethod.Get, this.repo.url + "/" + id).subscribe(
            response => this.product = response);
    }

    deleteProduct() {
        this.repo.deleteProduct(this.idOfProductToDelete);

        this.router.navigateByUrl("/catalogueOfGoods");
        this.repo.updateProducts(); //TODO this
    }
}