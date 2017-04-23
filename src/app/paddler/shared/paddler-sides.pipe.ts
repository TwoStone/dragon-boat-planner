import { Pipe, PipeTransform } from '@angular/core';

import { Side } from './paddler';

@Pipe({
    name: 'sides'
})

export class SidePipe implements PipeTransform {
    transform(sides: Side[]): any {
        return sides.sort().map(side => {
            switch (side) {
                case Side.RIGHT:
                    return 'Right';
                case Side.LEFT:
                    return 'Left';
            };
        }).join('/');
    }
}
