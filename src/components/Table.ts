interface spot{
    type: Enumerator;
    quantity: number;
    location: number[][];
    getType():Enumerator;
    getQuantity(): number;
    getLocation(): number[][];
}

class Property implements spot{
    type: Enumerator;
    quantity: number;
    location: number[][];
    classif: String; 
    price: number;
    noHouses: number;
    noCompanies: number;

    constructor(type: Enumerator, quantity: number, location: number[][], classif: String, 
        price: number, noHouses: number, noCompanies: number){
            this.type = type;
            this.quantity = quantity;
            this.location = location;
            this.classif = classif;
            this.price = price;
            this.noHouses = noHouses;
            this.noCompanies = noCompanies;
    }

    getType(){
        return this.type;
    }

    getQuantity(){
        return this.quantity;
    }

    getLocation(){
        return this.location;
    }
}

