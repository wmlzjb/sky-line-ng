import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import '../styles/styles.scss';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';

import { reducers, metaReducers } from './reducers';

const appRoutes: Routes = [
    { path: '**', redirectTo: '/user/login' }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),

        CoreModule,
        UserModule,
        MainModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
