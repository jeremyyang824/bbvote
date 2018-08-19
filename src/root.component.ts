import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <router-outlet></router-outlet>
      <ngx-loading-bar color='#007bff'></ngx-loading-bar>
    `
})
export class RootComponent {

}
