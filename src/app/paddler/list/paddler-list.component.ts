import { Observable } from 'rxjs/Rx';
import { OnInit } from '@angular/core/core';
import { Paddler, PaddlerService, Gender } from '../shared/paddler-shared.module';
import { Component } from '@angular/core';

@Component({
    selector: 'app-paddler-list',
    templateUrl: 'paddler-list.component.html',
    styleUrls: ['paddler-list.component.scss']
})
export class PaddlerListComponent implements OnInit {

    public paddlers: Paddler[] = [];

    constructor(private paddlerService: PaddlerService) {
    }

    public ngOnInit() {
        this.paddlerService.getAll().subscribe((paddlers) => this.paddlers = paddlers);
    }

    public gender(paddlers: Paddler[], gender: Gender) {
        return paddlers.filter(paddler => paddler.gender === gender);
    }
}
