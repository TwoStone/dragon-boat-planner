import { EditBoatModule } from './edit/edit-boat.module';
import { EditBoatComponent } from './edit/edit-boat.component';
import { BoatListModule } from './list/boat-list.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BoatListComponent } from './list/boat-list.component';
import { BoatSharedModule } from './shared/boat-shared.module';

@NgModule({
    imports: [
        EditBoatModule,
        BoatListModule,
        BoatSharedModule,
        RouterModule.forChild([{
            path: 'boat',
            component: BoatListComponent
        }, {
            path: 'boat/:boatId',
            component: EditBoatComponent
        }])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class BoatModule {}
