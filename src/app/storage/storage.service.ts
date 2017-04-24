import { Injectable, Injector, Type } from '@angular/core';

@Injectable()
export class StorageService {

    constructor(private injector: Injector) {
    }

    public get<T>(key: string, reviver?: (data: T) => T): T {
        const result: T = JSON.parse(this.storage.getItem(key));
        if (result && reviver) {
            return reviver(result);
        }
        return result;
    };

    public set<T>(key: string, value: T) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    public remove(key: string) {
        this.storage.removeItem(key);
    }

    private get storage() {
        return this.injector.get(Storage);
    }
}
