import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HotDealsComponent } from "./components/hot-deals/containers/hot-deals.component";
import { AboutComponent } from "./components/about/about.component";
import { DirectionsComponent } from "./components/directions/directions.component";
import { CouponsComponent } from "./components/coupons/coupons.component";

const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "hot-deals", component: HotDealsComponent },
  { path: "coupons", component: CouponsComponent },
  { path: "directions", component: DirectionsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
