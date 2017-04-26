import { OnInit } from '@angular/core/core';
import { Component } from '@angular/core';
import { Boat, BoatService } from '../shared';


@Component({
    selector: 'app-boat-list',
    templateUrl: 'boat-list.component.html',
    styleUrls: ['boat-list.component.scss']
})
export class BoatListComponent implements OnInit {

    public boats: Boat[];

    constructor(private boatService: BoatService) { }

    public ngOnInit() {
        this.boatService.getAll().subscribe((boats) => {
            this.boats = boats;
        });
    }
}
