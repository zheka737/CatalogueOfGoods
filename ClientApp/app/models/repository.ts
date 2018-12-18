import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, RequestMethod, Request, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { CatalogueSettings } from "./catalogueSettings";
import { Colors } from "../models/product.model";
import { ErrorHandlerService, ValidationError } from "../components/errorHandler.service";
import "rxjs/add/operator/catch";
import { Router, ActivatedRoute } from "@angular/router";


@Injectable()
export class Repository {
    url = "/api/products";
    products: Product[] = [];
    yy:Colors;

    catalogueSettings: CatalogueSettings = new CatalogueSettings();

    constructor(private http: Http, @Inject('BASE_URL') private originUrl: string, private  router: Router) {
        this.updateProducts();
        this.fillAllColors();
       
    }

    updateProducts() {

        let url = this.url;

        url = url + "?sortColumn=" + this.catalogueSettings.sortColumn;


        if (this.catalogueSettings.descOrder) {
            url = url + "&descOrder=" + this.catalogueSettings.descOrder;
        }

        if (this.catalogueSettings.nameFilterEnabled) {
            url = url + "&name=" + this.catalogueSettings.nameFilter;
        }

        if (this.catalogueSettings.quantityFilterEnabled) {
            url = url + "&quantity=" + this.catalogueSettings.quantityFilter;
        }

        if (this.catalogueSettings.colorFilterEnabled) {
            url = url + "&color=" + this.catalogueSettings.colorFilter;
        }

        this.sendRequest(RequestMethod.Get, url, ).subscribe(response => this.products = (response == null || response == undefined ? [] : response ));
    }

    createProduct(product: Product) {
        let data = {
            name: product.name,
            color: product.color,
            quantity: product.quantity
        };

        this.sendRequest(RequestMethod.Post, this.url, data).subscribe(
            response => {
                this.products.push(product);
                this.router.navigateByUrl("/catalogueOfGoods");
            });
    }



    replaceProduct(product: Product) {
        let data = { name: product.name, quantity: product.quantity, color: product.color };

        this.sendRequest(RequestMethod.Put, this.url + "/" + product.productId, data)
            .subscribe(response => {
                this.updateProducts();
                this.router.navigateByUrl("/catalogueOfGoods");
            });

    }

    deleteProduct(id: number) {

        this.sendRequest(RequestMethod.Delete, this.url + "/" + id, )
            .subscribe(response => this.updateProducts());
    }

    public sendRequest(verb: RequestMethod, url: string,
        data?: any): Observable<any> {
        return this.http.request(new Request({
            method: verb, url: this.originUrl + url, body: data
        })).map(response => {
            return response.headers.get("Content-Length") != "0" ? response.json() : null;
        }).catch((errorResponse: Response) => {
            if (errorResponse.status == 400) {
                let jsonData: string;
                try {
                    jsonData = errorResponse.json();
                } catch (e) {
                    throw new Error("Network Error");
                }
                let messages = Object.getOwnPropertyNames(jsonData)
                    .map(p => jsonData[p as any]);
                throw new ValidationError(messages);
            }
            throw new Error("Network Error");
        });;
    }

    fillAllColors() {
        let i = 0;
        for (let item in Colors) {
            if (isNaN(Number(item))) {
                this.allColors.push({ numberOfColor: i, color: String(item) });
                i = i + 1;
            }
        }
    }

    allColors: any[] = [];
}