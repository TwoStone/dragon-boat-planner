import { Paddler } from '../../paddler';

export class Bench {
    public left: Paddler;
    public right: Paddler;

    constructor(template?: Bench) {
        this.left = template.left;
        this.right = template.right;
    }
}

export class Boat {
    public readonly id;
    public name: string;
    public benches: Bench[];

    constructor(id?: number, template?: Boat) {
        if (template) {
            this.id = template.id;
            this.name = template.name;
            this.benches = template.benches;
        } else {
            this.id = id;
        }
    }

}
