import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs';
import { collapseToLeft } from '../animations/collapse-to-left';

@Component({
    selector: 'app-main-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    animations: [collapseToLeft]
})

export class MainLayoutComponent implements OnInit {
    showSidenav$: Observable<boolean>;
    sideStatus: string;
    constructor(private store: Store<fromRoot.State>) {
        this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    }

    ngOnInit() {
        this.showSidenav$.subscribe(status => {
            this.sideStatus = status ? 'open' : 'close';
        });
    }
}
