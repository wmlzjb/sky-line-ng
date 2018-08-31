import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ApiModule } from '../api/api.module';
import { AuthGuard } from './services/common/auth-guard.service';
import { SkyLineInterceptor } from './services/common/http-interceptor.service';

@NgModule({
    imports: [
        ApiModule
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        [{ provide: HTTP_INTERCEPTORS, useClass: SkyLineInterceptor, multi: true }],
        CookieService,
        AuthGuard
    ],
})
export class CoreModule { }
