import { Input } from '@angular/core/core';
import { Reviver } from './reviver';

describe('Reviver', () => {

    it('#revive adds missing methods', () => {
        class TestClass {
            public a: string;
            public b: string;
            public plus() {
                return this.a + this.b;
            }
        }

        const testFixture =  {
            a: 'Hallo',
            b: 'Welt'
        } as TestClass;

        Reviver.revive(TestClass, testFixture);
        expect(testFixture.a).toBe('Hallo');
        expect(testFixture.b).toBe('Welt');
        expect(testFixture.plus).toBeDefined();
        expect(testFixture.plus()).toBe('HalloWelt');
    });

    it('#revive can revive childs', () => {
        class OuterClass {
            test: TestClass;
        }

        class TestClass {
            public a: string;
            public b: string;
            public plus() {
                return this.a + this.b;
            }
        }

        const testFixture =  {
            a: 'Hallo',
            b: 'Welt'
        } as TestClass;

        const outerFixture = {
            test: testFixture
        } as OuterClass;

        const testReviver = (key, prop) => {
            Reviver.revive(TestClass, prop);
        };

        const reviverSpy = jasmine.createSpy('testReviver', testReviver).and.callThrough();

        Reviver.revive(OuterClass, outerFixture, reviverSpy);
        expect(outerFixture.test.a).toBe('Hallo');
        expect(outerFixture.test.b).toBe('Welt');
        expect(outerFixture.test.plus).toBeDefined();
        expect(outerFixture.test.plus()).toBe('HalloWelt');
        expect(reviverSpy).toHaveBeenCalledWith('test', testFixture);
    });
});
