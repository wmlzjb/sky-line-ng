import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { LoginEffects } from './effects/login.effects';

import { LayoutComponent } from './containers/layout/layout.component';
import { LoginComponent } from './containers/login/login.component';
import { UserButtonComponent } from './components/button.component';
import { UserRegisterComponent } from './containers/register/register.component';

const routes: Routes = [
    {
        path: 'user', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: UserRegisterComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    }
];
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('login', reducers),
        EffectsModule.forFeature([LoginEffects]),
    ],
    exports: [],
    declarations: [
        LayoutComponent,
        LoginComponent,
        UserRegisterComponent,

        UserButtonComponent
    ],
    providers: [

    ],
})
export class UserModule { }
