import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiModule } from '../api/api.module';
import { AuthGuard } from './services/common/auth-guard.service';

@NgModule({
    imports: [
        ApiModule
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        CookieService,
        AuthGuard
    ],
})
export class CoreModule { }
