import { NgModule } from "@angular/core";

import { HotDealsComponent } from "./containers/hot-deals.component";
import { HotDealContainerComponent } from "./hot-deal-container/containers/hot-deal-container.component";
import { DependenciesModule } from "../dependencies.module";

@NgModule({
    imports: [
        DependenciesModule
    ],
    declarations: [
        HotDealsComponent,
        HotDealContainerComponent
    ]
})
export class HotDealsModule { }
