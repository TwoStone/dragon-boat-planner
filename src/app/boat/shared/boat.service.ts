import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { StorageService } from '../../storage/storage.service';

import { Boat } from './';

@Injectable()
export class BoatService {

    constructor(private storage: StorageService) { }

    public getAll(): Observable<Boat[]> {
        return Observable.from([Array.from(this.load().values())]);
    }

    public get(id: number) {
        return this.getAll().map(boats => boats.find(boat => boat.id === id));
    }

    public update(boat: Boat) {
        const boats = this.load();
        boats.set(boat.id, boat);
        this.save(boats);
        return Observable.from([boat]);
    }

    public delete(id: number) {
        const boats = this.load();
        boats.delete(id);
        this.save(boats);
    }

    private load(): Map<number, Boat> {
        let boats = this.storage.get<Boat[]>('boat');
        if (!boats) {
            boats = [];
        }
        return new Map(boats.map<[number, Boat]>(boat => [boat.id, boat]);
    }

    private save(boats: Map<number, Boat>) {
        this.storage.set('boat', Array.from(boats.values()));
    }

}