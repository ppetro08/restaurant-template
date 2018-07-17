import { Component, isDevMode } from "@angular/core";

@Component({
  selector: "sammys-directions",
  templateUrl: "./directions.component.html",
})
export class DirectionsComponent {
  isDevMode: boolean = isDevMode();

  latitude: number = 39.7308736;

  longitude: number = -84.1406749;
}
