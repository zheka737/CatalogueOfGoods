import { Colors } from "./product.model";

export class CatalogueSettings {
    sortColumn: string;
    descOrder: boolean;

    nameFilter: string;
    nameFilterEnabled: boolean;
    colorFilter: Colors;
    colorFilterEnabled: boolean;
    quantityFilter: number;
    quantityFilterEnabled: boolean;

    constructor() {
        this.Reset();
    }

    public Reset() {
        this.sortColumn = "name";
        this.descOrder = false;

        this.nameFilter = "";
        this.nameFilterEnabled = false;
        this.colorFilter = 0;
        this.colorFilterEnabled = false;
        this.quantityFilter = 0;
        this.quantityFilterEnabled = false;
    }
}