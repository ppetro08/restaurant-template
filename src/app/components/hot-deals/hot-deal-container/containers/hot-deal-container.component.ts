import { Component, Input } from "@angular/core";
import { HotDealModel } from "../../models/hot-deal.model";

@Component({
    selector: "sammys-hot-deal-container",
    templateUrl: "hot-deal-container.component.html",
    styleUrls: ["../styles/hot-deal-container.scss"]
})

export class HotDealContainerComponent {
    @Input() hotDeal: HotDealModel;
}
