import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './services/auth-guard.service';
import { MainNavbarComponent } from './navbar/navbar.component';
import { MainToolbarComponent } from './toolbar/toolbar.component';
const appRoutes: Routes = [
    {
        path: '', component: MainLayoutComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
            },
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
        MainLayoutComponent,
        MainNavbarComponent,
        MainToolbarComponent
    ],
    providers: [],
})
export class MainModule { }
