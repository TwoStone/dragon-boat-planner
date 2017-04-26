import { Paddler } from '../../paddler/shared';
import { EditBoatNameComponent } from './name/edit-boat-name.component';
import { ActivatedRoute } from '@angular/router';
import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';

import { Boat, BoatService } from '../shared';

@Component({
    selector: 'app-edit-boat',
    templateUrl: 'edit-boat.component.html',
    styleUrls: ['edit-boat.component.scss']
})
export class EditBoatComponent implements OnInit {

    public boat: Boat;

    @ViewChildren('editName')
    public editNameModal: QueryList<EditBoatNameComponent>;

    constructor(
        private boatService: BoatService,
        private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.route.params.pluck('boatId').subscribe((boatId) => {
            if (boatId === 'new') {
                this.boatService.create().subscribe(boat => {
                    this.boat = boat;
                    setTimeout(() => {
                        this.editNameModal.first.show();
                    }, 100);
                });
            } else {
                this.boatService.get(+boatId).subscribe((boat) => this.boat = boat);
            }
        });
    }

    public saveBoat() {
        this.boatService.update(this.boat);
    }

    public weight(paddlers: Paddler[]) {
        return paddlers.filter(paddler => paddler)
            .map(paddler => paddler.weight)
            .reduce((sum, current) => sum += current, 0);
    }
}
