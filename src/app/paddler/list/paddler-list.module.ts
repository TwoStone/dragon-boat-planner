// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// This Module's Components
import { PaddlerListComponent } from './paddler-list.component';
import { PaddlerSharedModule } from '../shared/paddler-shared.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        PaddlerSharedModule
    ],
    declarations: [
        PaddlerListComponent,
    ],
    exports: [
        PaddlerListComponent,
    ]
})
export class PaddlerListModule {

}
