import { NgModule } from "@angular/core";

import { NavigationComponent } from "./navigation.component";
import { NavigationService } from "./navigation.service";
import { AppRoutingModule } from "../../../app-routing.module";
import { DependenciesModule } from "../../dependencies.module";

@NgModule({
    imports: [
        DependenciesModule,
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
