import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../core/services/common/auth-guard.service';
const appRoutes: Routes = [
    {
        path: '', component: MainLayoutComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: '/user/login', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(appRoutes)
    ],
    exports: [],
    declarations: [
        MainLayoutComponent
    ],
    providers: [],
})
export class MainModule { }
