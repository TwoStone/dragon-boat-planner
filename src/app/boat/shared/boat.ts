import { Reviver } from '../../utils/reviver';
import { Paddler, PaddlerReviver } from '../../paddler';

export class Bench {
    public left: Paddler;
    public right: Paddler;

    constructor() {
    }
}

export class Boat {
    public readonly id;
    public name: string;
    public benches: Bench[];

    constructor(id: number) {
        this.id = id;
    }
}

export function BoatReviver(key: keyof Boat, property: any) {
    switch (key) {
        case 'benches':
            return Reviver.reviveArray(Bench, property, BenchReviver);
    }
}

function BenchReviver(key: keyof Bench, property: any) {
    return Reviver.revive(Paddler, property, PaddlerReviver);
}
