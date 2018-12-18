import { Component } from "@angular/core";
import { Repository } from "../../models/repository";
import { CatalogueSettings } from "../../models/catalogueSettings";
import { Colors } from "../../models/product.model";

@Component({
        selector: "filterSettings",
        templateUrl: "./filterSettings.component.html"
    })
export class FilterSettingsComponent {
    constructor(private repo: Repository) {
        
    }

    get catalogueSettings(): CatalogueSettings {
        return this.repo.catalogueSettings;
    }

    applyFilter() {
        this.repo.updateProducts();
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

    get allColors(): any[] {
        return this.repo.allColors;
    }
}
