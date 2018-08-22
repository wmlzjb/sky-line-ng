import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard.component';

const routes: Routes = [
    {
        path: '**',
        component: DashboardComponent
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ],
    providers: [

    ],
})
export class DashboardModule { }
