interface Array<T> {
    flatMap<U>(callbackfn: (value: T, index: number, array: T[]) => U[], thisArg?: any): U[];
}

Array.prototype.flatMap = function<T, U>(callbackfn: (value: T, index: number, array: T[]) => U[], thisArg?: any) {
    return (<U[]> []).concat(...this.map(callbackfn));
};
