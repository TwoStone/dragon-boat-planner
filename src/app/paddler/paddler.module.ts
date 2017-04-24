import { PaddlerEditModule } from './edit/paddler-edit.module';
import { PaddlerEditComponent, PADDLER_ID_KEY } from './edit/paddler-edit.component';
import { PaddlerListComponent } from './list/paddler-list.component';
import { RouterModule, Routes} from '@angular/router';
import { PaddlerListModule } from './list/paddler-list.module';
import { PaddlerSharedModule } from './shared/paddler-shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        PaddlerEditModule,
        PaddlerListModule,
        PaddlerSharedModule,
        RouterModule.forChild([
            {
                path: 'paddler',
                component: PaddlerListComponent
            },
            {
                path: 'paddler/:paddlerId',
                component: PaddlerEditComponent
            }
        ])
    ],
    exports: [
        PaddlerListModule,
        PaddlerSharedModule
    ],
    declarations: [],
    providers: [],
})
export class PaddlerModule { }
