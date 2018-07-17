import { Component, OnInit } from "@angular/core";

import { NavigationModel } from "./navigation.model";
import { NavigationService } from "./navigation.service";

@Component({
    selector: "sammys-navigation",
    templateUrl: "navigation.component.html"
})

export class NavigationComponent implements OnInit {
    navigationModels: Array<NavigationModel>;
    constructor(private navigationService: NavigationService) {
        this.navigationModels = new Array<NavigationModel>();
    }
    ngOnInit() {
        this.navigationModels = this.navigationService.getNavigationModels();
    }
}
