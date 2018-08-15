import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationModule } from "./components/layout/navigation/navigation.module";
import { AboutModule } from "./components/about/about.module";
import { DirectionsModule } from "./components/directions/directions.module";
import { LayoutModule } from "./components/layout/layout.module";
import { HotDealsModule } from "./components/hot-deals/hot-deals.module";
import { CouponsModule } from "./components/coupons/coupons.module";
import { AppRoutingModule } from "./app-routing.module";
import { DependenciesModule } from "./components/dependencies.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DependenciesModule,
    NavigationModule,
    AboutModule,
    DirectionsModule,
    LayoutModule,
    HotDealsModule,
    CouponsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
