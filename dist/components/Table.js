class Property {
    constructor(quantity, location, classif, price) {
        this.quantity = quantity;
        this.location = location;
        this.classif = classif;
        this.price = price;
        this.isSold = false;
        this.isMortgaged = false;
    }
    setSaleStatus(saleStatus) {
        this.isSold = saleStatus;
    }
    setMortgageStatus(mortgageStatus) {
        this.isMortgaged = mortgageStatus;
    }
    getQuantity() {
        return this.quantity;
    }
    getLocation() {
        return this.location;
    }
    getClassif() {
        return this.classif;
    }
    getPrice() {
        return this.price;
    }
    getSaleStatus() {
        return this.isSold;
    }
    getMortgageStatus() {
        return this.isMortgaged;
    }
}
console.log("Hello There!");
class RealState extends Property {
}
//# sourceMappingURL=Table.js.map