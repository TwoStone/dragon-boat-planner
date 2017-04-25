export class Reviver {
    public static revive<T, K extends keyof T>(type: new(...arg: any[]) => T, obj: T, propertyReviver?: (key: K, property: any) => any) {
        if (propertyReviver) {
            Object.keys(obj).forEach((key: K, index) => {
                const property: T[K] = propertyReviver(key, obj[key]);
                if (property) {
                    obj[key] = property;
                }
            });
        }

        Object.keys(type.prototype)
            .filter((key) => !obj[key])
            .filter((key) => type.prototype[key] instanceof Function)
            .forEach(key => {
                obj[key] = type.prototype[key];
            });
            return obj;
    }

    public static reviveArray<T>(type: new(...args: any[]) => T, arr: Array<T>, propertyReviver?: (key: keyof T, property: any) => any) {
        return arr.map((element) => Reviver.revive(type, element, propertyReviver));
    }
}
