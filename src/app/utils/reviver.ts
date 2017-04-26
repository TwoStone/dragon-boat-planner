export class Reviver {
    public static revive<T, K extends keyof T>(type: new(...arg: any[]) => T, obj: T, propertyReviver?: (key: K, property: any) => any) {
        if (propertyReviver) {
            Object.keys(obj).forEach((key: K, index) => {
                if (obj[key]) {
                    const property: T[K] = propertyReviver(key, obj[key]);
                    if (property) {
                        obj[key] = property;
                    }
                }
            });
        }

        Object.getOwnPropertyNames(type.prototype)
            .filter((key) => !obj[key])
            .forEach((key) => {
                Object.defineProperty(obj, key, Object.getOwnPropertyDescriptor(type.prototype, key));
            });

            return obj;
    }

    public static reviveArray<T>(type: new(...args: any[]) => T, arr: Array<T>, propertyReviver?: (key: keyof T, property: any) => any) {
        return arr.map((element) => Reviver.revive(type, element, propertyReviver));
    }
}
