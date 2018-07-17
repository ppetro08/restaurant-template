import { Injectable } from "@angular/core";
import { NavigationModel } from "./navigation.model";

@Injectable()
export class NavigationService {

    constructor() { }

    getNavigationModels(): Array<NavigationModel> {
        const navigationModels = new Array<NavigationModel>();
        navigationModels.push(new NavigationModel("About", "about"));
        navigationModels.push(new NavigationModel("Hot Deals", "hot-deals"));
        navigationModels.push(new NavigationModel("Coupons", "coupons"));
        navigationModels.push(new NavigationModel("Directions", "directions"));

        return navigationModels;
    }
}
