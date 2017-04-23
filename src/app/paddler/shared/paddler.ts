export enum Side {
    RIGHT = 0,
    LEFT = 1
}

export enum Gender {
    FEMALE = 0,
    MALE = 1
}

export class Paddler {
    private static ID_COUNTER = 0;

    public readonly id: number;
    public name: string;
    public weight: number;
    public sides: Side[];
    public gender: Gender;

    constructor() {
        this.id = Paddler.ID_COUNTER++;
        this.sides = [];
    }
}
