class Player {
    private name: String;
    private color: String;
    private balance: number;
    private noHouses: number;
    private noCompanies: number;

    constructor(name: String, color: String, balance: number){
        this.name = name;
        this.color = color;
        this.balance = balance;
        this.noHouses = 0;
        this.noCompanies = 0;
    }

    payMoney(value: number): void {
        this.balance -= value;
    }

    receiveMoney(value: number): void {
        this.balance += value;
    }

    buyProperty(property: Property): void {
        
    }

    sellProperty(property: Property): void {

    }

    setNoHouses(noHouses: number): void {
        this.noHouses = noHouses;
    }

    setNoCompanies(noCompanies: number): void {
        this.noCompanies = noCompanies;
    }

    getName(): String {
        return this.name;
    }

    getColor(): String {
        return this.color;
    }

    getBalance(): number {
        return this.balance;
    }

    getNoHouses(): number {
        return this.noHouses;
    }

    getNoCompanies(): number {
        return this.noCompanies;
    }

}