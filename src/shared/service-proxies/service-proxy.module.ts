import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        // ApiServiceProxies.UserServiceProxy,
        // ApiServiceProxies.TokenAuthServiceProxy,
        // { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
    ]
})
export class ServiceProxyModule { }
