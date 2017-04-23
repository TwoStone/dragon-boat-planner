import { BoatService } from './boat.service';
import { StorageModule } from '../../storage';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        StorageModule
    ],
    exports: [],
    declarations: [],
    providers: [
        BoatService
    ],
})
export class BoatSharedModule { }
