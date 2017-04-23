import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class StorageService {

    constructor(private injector: Injector) {
    }

    public get<T>(key: string): T {
        return JSON.parse(this.storage.getItem(key));
    }

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
