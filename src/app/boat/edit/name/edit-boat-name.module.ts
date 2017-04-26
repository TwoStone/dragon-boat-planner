// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

// This Module's Components
import { EditBoatNameComponent } from './edit-boat-name.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule
    ],
    declarations: [
        EditBoatNameComponent,
    ],
    exports: [
        EditBoatNameComponent,
    ]
})
export class EditBoatNameModule {

}
