import { Side } from '../../paddler/shared';
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


    constructor(id: number, benches: number) {
        this.id = id;
        this.benches = [];
        for (let i = 0; i < benches; i++) {
            this.benches.push(new Bench());
        }
    }

    public get paddlers() {
        return this.benches.flatMap((bench) => {
            return [bench.left, bench.right];
        }).filter((paddler) => paddler);
    }

    public paddlersForSide(side: Side) {
        return this.benches.map(bench => {
            switch (side) {
                case Side.LEFT:
                    return bench.left;
                case Side.RIGHT:
                    return bench.right;
            }
        });
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
