import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigationComponent } from "./navigation.component";
import { NavigationService } from "./navigation.service";
import { AppRoutingModule } from "../../../app-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        NavigationComponent
    ],
    declarations: [
        NavigationComponent
    ],
    providers: [
        NavigationService
    ],
})
export class NavigationModule { }
