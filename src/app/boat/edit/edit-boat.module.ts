// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// This Module's Components
import { EditBoatNameModule } from './name/edit-boat-name.module';
import { EditBoatComponent } from './edit-boat.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        EditBoatNameModule
    ],
    declarations: [
        EditBoatComponent,
    ],
    exports: [
        EditBoatComponent,
    ]
})
export class EditBoatModule {

}
