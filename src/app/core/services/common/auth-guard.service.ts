
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {

    }

    canActivate(): Observable<boolean> {
        // const token = this.cookieService.get(environment.accessToken);
        // const tenantId = this.cookieService.get(environment.accessTenantId);
        // if (!token || !tenantId) {
        //     this.router.navigate(['/user/login']);
        //     return of(false);
        // }
        // return this.userService.getUserInfo().pipe(map(x => true));

        return of(true);
    }
}
