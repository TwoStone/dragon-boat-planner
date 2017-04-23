import { StorageService } from './storage.service';
import { ModuleWithProviders } from '@angular/core/core';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        StorageService
    ],
})
export class StorageModule {

    public static local(): ModuleWithProviders {
        return StorageModule.forStorage(localStorage);
    }

    public static session(): ModuleWithProviders {
        return StorageModule.forStorage(sessionStorage);
    }

    public static forStorage(store: Storage): ModuleWithProviders {
        return  {
            ngModule: StorageModule,
            providers: [
                {
                    provide: Storage,
                    useValue: store
                }
            ]
        };
    }
}
