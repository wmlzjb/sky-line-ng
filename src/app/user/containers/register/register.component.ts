import { Component, OnInit, HostBinding } from '@angular/core';
import { slideToRight } from '../../../animations/animation';

@Component({
    selector: 'app-user-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [slideToRight]
})

export class UserRegisterComponent implements OnInit {
    @HostBinding('@routerAnimate') state;
    constructor() { }

    ngOnInit() { }
}
