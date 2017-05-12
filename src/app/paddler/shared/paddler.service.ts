import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Reviver } from '../../utils/reviver';
import { StorageService } from '../../storage';

import { Paddler, PaddlerReviver } from './paddler';

@Injectable()
export class PaddlerService {

    constructor(private storage: StorageService) {
    }

    public create(): Observable<Paddler> {
        let id = this.storage.get<number>('paddler_id');
        const paddler = new Paddler(id++);
        this.storage.set('paddler_id', id);
        return Observable.from([paddler]);
    }

    public getAll(): Observable<Paddler[]> {
        return Observable.from([Array.from(this.load().values())]);
    }

    public get(id: number) {
        return this.getAll().map((paddlers) => {
            return paddlers.find(paddler => paddler.id === id);
        });
    }

    public update(paddler: Paddler) {
        const paddlers = this.load();
        paddlers.set(paddler.id, paddler);
        this.save(paddlers);
        return Observable.from([paddler]);
    }

    public delete(id: number) {
        const paddlers = this.load();
        paddlers.delete(id);
        this.save(paddlers);
    }

    private load(): Map<number, Paddler> {
        let paddlers = this.storage.get<Paddler[]>('paddler', (result) => {
            return Reviver.reviveArray(Paddler, result, PaddlerReviver);
        });

        if (!paddlers) {
            paddlers = [];
        }
        return new Map(paddlers.map<[number, Paddler]>((p) => [p.id, p]));
    }

    private save(paddlers: Map<number, Paddler>) {
        this.storage.set('paddler', Array.from(paddlers.values()));
    }
}
