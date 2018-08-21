import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

// import { LayoutComponent } from './layout.component';
// import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './new-ui/layout.component';
import { LoginComponent } from './new-ui/login/login.component';

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
