import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable()
export class SkyLineInterceptor implements HttpInterceptor {
    constructor(
        private cookieService: CookieService,
        private router: Router
    ) {

    }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // const zeta_token = this.cookieService.get(environment.accessToken);
        // const zeta_tenant_id = this.cookieService.get(environment.accessTenantId);
        // if (zeta_token && zeta_tenant_id) {
        //   req = req.clone({
        //     setHeaders: {
        //       Authorization: `Bearer ${zeta_token}`,
        //       TenantId: zeta_tenant_id
        //     },
        //     // 带上其它cookie。
        //     withCredentials: true
        //   });
        // } else {
        //   if (
        //     this.router.routerState.snapshot.url.indexOf('/user/login') === -1
        //   ) {
        //     this.windowRef.nativeWindow.location.href = '/#/user/login';
        //     // 重载当前页，去除获取数据不到带来的异常，避免前端页面未做异常处理时出问题。
        //     this.windowRef.nativeWindow.location.reload();
        //   }
        // }
        return next.handle(req).pipe(tap(evt => {
            if (evt instanceof HttpResponse) {

            }
        }, err => {
            if (err instanceof HttpErrorResponse) {
                // if (typeof err.error === 'string') {
                //   const error = JSON.parse(err.error);
                //   // this.toasterService.pop('error', "", error ? error.message : err.message);
                //   this.notify['error'](error ? error.message : err.message, '错误');
                // } else {
                //   if (err.status === 401) {
                //     this.windowRef.nativeWindow.location.href = '/#/user/login';
                //     // 重载当前页，去除获取数据不到带来的异常，避免前端页面未做异常处理时出问题。
                //     this.windowRef.nativeWindow.location.reload();
                //   } else if (err.status === 403) {
                //     this.notify['error']('暂时无权限', '错误');
                //   } else if (err.status === 0 && err.statusText === 'Unknown Error') {
                //     this.notify['error']('您的网络出现故障，请稍后重试', '错误');
                //   } else {
                //     // this.toasterService.pop('error', "", err.error ? err.error.message : err.message);
                //     this.notify['error'](err.error ? err.error.message : err.message, '错误');
                //   }
                // }
                // this.postSubmitBtn();
            }
        }, () => {
            //   this.postSubmitBtn();
        }));
    }
    //   private postSubmitBtn() {
    //     if (this.appService.submitBtnIsDisabled) {
    //       this.appService.submitBtnIsDisabled = false;
    //       this.appService.setSubmitBtn(false);
    //     }
    //   }
}
