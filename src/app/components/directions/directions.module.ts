import { NgModule } from "@angular/core";

import { AgmCoreModule } from "@agm/core";

import { DependenciesModule } from "../dependencies.module";
import { DirectionsComponent } from "./directions.component";

@NgModule({
    imports: [
        DependenciesModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyDMXVtRwq0pTL_wqAWIMfMycx9_KAmweS0"
        })
    ],
    exports: [],
    declarations: [DirectionsComponent],
    providers: [],
})
export class DirectionsModule { }
