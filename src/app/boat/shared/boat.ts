import { Paddler } from '../../paddler';

export class Bench {
    public left: Paddler;
    public right: Paddler;
}

export class Boat {
    public readonly id;
    public name: string;
    public benches: Bench[];

    constructor(id: number) {
        this.id = id;
        this.benches = [];
        this.benches.length = 10;
        this.benches.fill(new Bench());
    }
}
