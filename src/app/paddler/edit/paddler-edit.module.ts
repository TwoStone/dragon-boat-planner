import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { PaddlerEditComponent } from './paddler-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        PaddlerEditComponent,
    ],
    exports: [
        PaddlerEditComponent,
    ]
})
export class PaddlerEditModule {

}
