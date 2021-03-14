interface spot {
    quantity: number;
    location: number[][];
    getQuantity(): number;
    getLocation(): number[][];
}
declare class Property implements spot {
    quantity: number;
    location: number[][];
    classif: String;
    price: number;
    isSold: boolean;
    isMortgaged: boolean;
    constructor(quantity: number, location: number[][], classif: String, price: number);
    setSaleStatus(saleStatus: boolean): void;
    setMortgageStatus(mortgageStatus: boolean): void;
    getQuantity(): number;
    getLocation(): number[][];
    getClassif(): String;
    getPrice(): number;
    getSaleStatus(): boolean;
    getMortgageStatus(): boolean;
}
declare class RealState extends Property {
}
