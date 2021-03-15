class Bank {
    private gameMode: number;
    private noPlayers: number;
    private noProperties: number;
    private noHouses: number;
    private noCompanies: number;

    constructor(gameMode: number, noPlayers: number, noProperties: number, noHouses: number, noCompanies: number){
        this.gameMode = gameMode;
        this.noPlayers = noPlayers;
        this.noProperties = noProperties;
        this.noHouses = noHouses;
        this.noCompanies = noCompanies;
    }

    payMoneyToPlayer(player: Player, value: number): void {
        player.receiveMoney(value);
    }

    getMoneyFromPlayer(player: Player, value: number): void {
        player.payMoney(value);
    }

    giveProperty(player: Player, property: Property): void {
        
    }

}