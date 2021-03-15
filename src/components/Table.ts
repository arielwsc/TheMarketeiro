

interface spot {
    name: String;
    quantity: number;
    location: number[][];
    getName(): String;
    getQuantity(): number;
    getLocation(): number[][];
}

class Property implements spot {
    name: String;
    quantity: number;
    location: number[][];
    protected owner: String;
    protected classif: String; 
    protected price: number;
    protected rent: number;
    protected mortgage: number;
    protected isSold: boolean;
    protected isMortgaged: boolean;
    

    constructor(name: String, quantity: number, location: number[][], owner: String, classif: String, price: number, rent: number,
        mortgage: number){
            this.name = name;
            this.quantity = quantity;
            this.location = location;
            this.owner = owner;
            this.classif = classif;
            this.price = price;
            this.rent = rent;
            this.mortgage = mortgage;
            this.isSold = false;
            this.isMortgaged = false;
    }

    setOwner(owner: String): void {
        this.owner = owner;
    }

    setSaleStatus(saleStatus: boolean): void {
        this.isSold = saleStatus;
    }

    setMortgageStatus(mortgageStatus: boolean): void{
        this.isMortgaged = mortgageStatus;
    }

    getName(): String {
        return this.name;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getLocation(): number[][] {
        return this.location;
    }

    getOwner(): String {
        return this.owner;
    }

    getClassif(): String {
        return this.classif;
    }

    getPrice(): number {
        return this.price;
    }

    getMortgage(): number {
        return this.mortgage;
    }

    getSaleStatus(): boolean {
        return this.isSold;
    }

    getMortgageStatus(): boolean {
        return this.isMortgaged;
    }
}

class RealState extends Property {
    private noHouses: number;
    private noCompanies: number;
    private houseValue: number;
    private companyValue: number;

    constructor(name: String, quantity: number, location: number[][], owner: String, classif: String, price: number, rent: number, mortgage: number, 
        noHouses: number, noCompanies: number, houseValue: number, companyValue: number){
        super(name, quantity, location, owner, classif, price, rent, mortgage);
        this.noHouses = noHouses;
        this.noCompanies = noCompanies;
        this.houseValue = houseValue;
        this.companyValue = companyValue;
    }

    setNoHouses(houses: number): void {
        this.noHouses = houses;
    }

    setNoCompanies(companies: number): void {
        this.noCompanies = companies;
    }

    getNoHouses(): number {
        return this.noHouses;
    }

    getNoCompanies(): number {
        return this.noCompanies;
    }

    getHouseValue(): number {
        return this.houseValue;
    }

    getCompanyValue(): number {
        return this.companyValue;
    }
}

class Utility extends Property {
    constructor(name: String, quantity: number, location: number[][], owner: String, classif: String, price: number, rent: number,
        mortgage: number){
            super(name, quantity, location, owner, classif, price, rent, mortgage);
    }
}

class Card implements spot {
    name: String;
    quantity: number;
    location: number[][];
    private type: String;
    private description: String;
    private action: number;

    constructor(name: String, quantity: number, location: number[][], type: String, description: String, action: number){
        this.name = name;
        this.quantity = quantity;
        this.location = location;
        this.type = type;
        this.description = description;
        this.action = action;
    }

    getName(): String {
        return this.name;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getLocation(): number[][] {
        return this.location;
    }

    getType(): String {
        return this.type;
    }

    getDescription(): String {
        return this.description;
    }

    getAction(): number {
        return this.action;
    }
}

class Payable implements spot {
    name: String;
    quantity: number;
    location: number[][];
    private type: String;
    private price: number;

    constructor(name: String, quantity: number, location: number[][], type: String, price: number){
        this.name = name;
        this.quantity = quantity;
        this.location = location;
        this.type = type;
        this.price = price;
    }

    getName(): String {
        return this.name;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getLocation(): number[][] {
        return this.location;
    }

    getType(): String {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }
}

class Kiosk implements spot {
    name: String;
    quantity: number;
    location: number[][];
    private type: String;
    private action: number;

    constructor(name: String, quantity: number, location: number[][], type: String, description: String, action: number){
        this.name = name;
        this.quantity = quantity;
        this.location = location;
        this.type = type;
        this.action = action;
    }

    getName(): String {
        return this.name;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getLocation(): number[][] {
        return this.location;
    }

    getType(): String {
        return this.type;
    }

    getAction(): number {
        return this.action;
    }
}
