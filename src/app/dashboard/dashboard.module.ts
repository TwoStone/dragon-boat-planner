// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// This Module's Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ])
    ],
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent,
    ]
})
export class DashboardModule {

}
