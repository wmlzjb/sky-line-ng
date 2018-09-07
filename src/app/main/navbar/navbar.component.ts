import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as LayoutActions from '../actions/layout.actions';
import * as fromRoot from '../../reducers';
import { opacity } from '../../animations/collapse-to-left';

@Component({
    selector: 'app-main-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [opacity]
})

export class MainNavbarComponent implements OnInit {
    @Input() sideStatus: boolean;
    constructor(private store: Store<fromRoot.State>) {

    }

    ngOnInit() {

    }
    toggleSide() {
        this.sideStatus = !this.sideStatus;
        if (this.sideStatus) {
            this.store.dispatch(new LayoutActions.OpenSidenav());
        } else {
            this.store.dispatch(new LayoutActions.CloseSidenav());
        }
    }
}
