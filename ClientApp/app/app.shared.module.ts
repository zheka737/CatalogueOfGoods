import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CatalogueOfGoodsComponent } from  "./components/catalogueOfGoods/catalogueOfGoods.component"
import { ModelModule } from "./models/modelModule";
import { CreateEditProductComponent } from "./components/product/createEditProduct.component";
import { DeleteProductComponent } from "./components/product/deleteProduct.component";
import { FilterSettingsComponent } from "./components/catalogueOfGoods/filterSettings.component";
import { ErrorHandler } from "@angular/core";
import { ErrorHandlerService } from "./components/errorHandler.service";

import { AppComponent } from './components/app/app.component';

const eHandler = new ErrorHandlerService();
export function handler() {
    return eHandler;
}

@NgModule({
    declarations: [
        AppComponent, CatalogueOfGoodsComponent, CreateEditProductComponent, DeleteProductComponent, FilterSettingsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: "createEditProduct/:id", component: CreateEditProductComponent },
            { path: "deleteProduct/:id", component: DeleteProductComponent },
            { path: "createEditProduct", component: CreateEditProductComponent },
            { path: "catalogueOfGoods", component: CatalogueOfGoodsComponent },
            { path: '', redirectTo: 'catalogueOfGoods', pathMatch: 'full' }
        ]),
        ModelModule
    ],
    providers: [
        { provide: ErrorHandlerService, useFactory: handler },
        { provide: ErrorHandler, useFactory: handler }]
})
export class AppModuleShared {
}
