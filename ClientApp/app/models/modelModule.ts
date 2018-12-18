import { NgModule } from "@angular/core";
import { Repository } from "./repository";  //this is our class that will be injected in cntr
@NgModule({ //this is like attribute of class in C#
    providers: [Repository]
})
export class ModelModule { }
