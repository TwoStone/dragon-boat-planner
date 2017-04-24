export enum Side {
    RIGHT = 0,
    LEFT = 1
}

export enum Gender {
    FEMALE = 0,
    MALE = 1
}

export class Paddler {
    public readonly id: number;
    public name: string;
    public weight: number;
    public sides: Side[];
    public gender: Gender;

    constructor(id?: number, template?: Paddler) {
        if (template) {
            this.id = template.id;
            this.name = template.name;
            this.weight = template.weight;
            this.sides = template.sides;
            this.gender = template.gender;
        } else {
            this.id = id;
        }
    }
}
