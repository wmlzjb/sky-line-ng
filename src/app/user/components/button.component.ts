import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user-button',
    template: `<div class="btn-layout" (click)="submit($event)">{{pending?('正在'+text+'...'):text}}</div>`,
    styles: [`
        :host {
            width: 100%;
            height: 100%;
            background-color: rgb(39, 57, 113);
        }
        .btn-layout {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;
            justify-content: center;
            color: rgb(246, 221, 179);
            font-size: 16px;
            cursor: pointer;
        }
    `]
})

export class UserButtonComponent implements OnInit {
    @Input() pending;
    @Input() text;
    @Output() click: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    ngOnInit() { }
    submit($event) {
        this.click.emit($event);
    }
}
