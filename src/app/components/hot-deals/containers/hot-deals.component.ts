import { Component } from "@angular/core";
import { HotDealsService } from "../services/hot-deals.service";
import { HotDealModel } from "../models/hot-deal.model";

@Component({
  selector: "sammys-hot-deals",
  templateUrl: "./hot-deals.component.html",
  providers: [HotDealsService],
  styleUrls: ["../styles/hot-deals.scss"]
})

export class HotDealsComponent {
  hotDeals: HotDealModel[];

  constructor(private hotDealsService: HotDealsService) {
    this.hotDeals = this.hotDealsService.getHotDeals();
  }
}
