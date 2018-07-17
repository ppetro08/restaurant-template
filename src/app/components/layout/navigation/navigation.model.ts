export class NavigationModel {
    label: string;
    route: string;
    subNavigation: Array<NavigationModel>;

    constructor(label: string, route: string) {
        this.label = label;
        this.route = route;
        this.subNavigation = new Array<NavigationModel>();
    }
}