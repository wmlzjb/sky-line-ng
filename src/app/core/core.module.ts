import { NgModule } from '@angular/core';
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
        AuthGuard
    ],
})
export class CoreModule { }
