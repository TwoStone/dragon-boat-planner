import {Paddler} from './paddler';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class PaddlerService {

    private paddlers: Map<number, Paddler>;

    constructor() {
        this.paddlers = new Map();
    }

    public getAll() {
        return Observable.from([Array.from(this.paddlers.values())]);
    }

    public get(id: number) {
        return this.getAll().map((paddlers) => {
            return paddlers.find(paddler => paddler.id === id);
        });
    }

    public update(paddler: Paddler) {
        this.paddlers.set(paddler.id, paddler);
        return Observable.from([paddler]);
    }

    public delete(id: number) {
        this.paddlers.delete(id);
    }
}
