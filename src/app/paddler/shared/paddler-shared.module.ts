import { SidePipe } from './paddler-sides.pipe';
import { PaddlerService } from './paddler.service';
import { NgModule } from '@angular/core';

export * from './paddler';
export * from './paddler.service';
export * from './paddler-sides.pipe';

@NgModule({
    imports: [],
    exports: [
        SidePipe
    ],
    declarations: [
        SidePipe
    ],
    providers: [
        PaddlerService
    ],
})
export class PaddlerSharedModule { }
