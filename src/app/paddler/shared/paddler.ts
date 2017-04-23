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

    constructor(id: number) {
        this.id = id;
        this.sides = [];
    }
}
