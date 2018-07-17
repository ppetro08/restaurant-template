import { NgModule } from '@angular/core';

import { NavigationModule } from './navigation/navigation.module';

@NgModule({
    imports: [NavigationModule],
    exports: [NavigationModule],
})
export class LayoutModule { }
