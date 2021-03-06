import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Paddler, PaddlerService, Side, Gender } from '../shared/paddler-shared.module';

export const PADDLER_ID_KEY = 'paddlerId';

@Component({
    selector: 'app-paddler-edit',
    templateUrl: 'paddler-edit.component.html',
    styleUrls: ['paddler-edit.component.scss']
})
export class PaddlerEditComponent {

    public paddler: Paddler;

    constructor(
        private paddlerService: PaddlerService,
        private router: Router,
        private route: ActivatedRoute) {

        this.route.params.pluck('paddlerId').subscribe((id: number|string) => {
            if (id === 'new') {
                this.paddlerService.create().subscribe(paddler => {
                    this.paddler = paddler;
                });
            } else {
                this.paddlerService.get(+id).subscribe(paddler => {
                    this.paddler = paddler;
                });
            }
        });
    }

    public setGender(gender: Gender) {
        this.paddler.gender = +gender;
    }

    public changeSide(checked: boolean, side: Side) {
        if (checked) {
            this.paddler.sides.push(side);
        } else {
            this.paddler.sides.splice(this.paddler.sides.indexOf(side), 1);
        }
    }

    public save() {
        this.paddlerService.update(this.paddler).subscribe(() => {
            this.router.navigateByUrl('paddler');
        });
    }

    public cancel() {
        this.router.navigateByUrl('paddler');
    }
}
