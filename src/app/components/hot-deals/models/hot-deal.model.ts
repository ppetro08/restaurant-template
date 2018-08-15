export class HotDealModel {
    cost: number;
    imageUrl: string;
    name: string;

    constructor(cost: number, name: string, imageUrl?: string) {
        this.cost = cost;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}
