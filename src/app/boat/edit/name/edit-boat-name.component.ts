import { Component, Input, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'app-edit-boat-name',
    templateUrl: 'edit-boat-name.component.html',
    styleUrls: ['edit-boat-name.component.scss']
})
export class EditBoatNameComponent implements OnInit {
    @ViewChild(ModalDirective)
    public modal: ModalDirective;

    @Input()
    public name: string;

    @Output()
    public nameChange: EventEmitter<string> = new EventEmitter();

    @Output()
    public onHide: EventEmitter<void> = new EventEmitter<void>();

    public show() {
        this.modal.show();
    }

    constructor() {
    }

    public ngOnInit() {
        this.modal.onHide.subscribe(() => this.onHide.emit());
    }
}
