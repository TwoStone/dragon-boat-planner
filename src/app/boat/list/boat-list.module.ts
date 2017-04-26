import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { BoatListComponent } from './boat-list.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        BoatListComponent,
    ],
    exports: [
        BoatListComponent,
    ]
})
export class BoatListModule {

}
