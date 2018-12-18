export class Product {
    constructor(public productId?: number, public name?: string, public quantity?: number, public color?: Colors) {
    }
}

export enum Colors
{
    Empty = 0, Red = 1, Orange = 2, Yellow = 3
        , Green = 4, Blue = 5, Indigo = 6, Violet = 7
};