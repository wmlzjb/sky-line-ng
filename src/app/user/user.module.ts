import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'user', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    }
];
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [
        LayoutComponent,
        LoginComponent
    ],
    providers: [

    ],
})
export class UserModule { }
