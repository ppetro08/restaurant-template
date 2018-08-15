import { Injectable } from "@angular/core";
import { HotDealModel } from "../models/hot-deal.model";

@Injectable()
export class HotDealsService {
    getHotDeals(): HotDealModel[] {
        return [
            new HotDealModel(20, "Bud Light", "assets/images/bud-light-3-pack.jpeg"),
            new HotDealModel(20, "Bud Light", "assets/images/bud-light-3-pack.jpeg")
        ];
    }
}
