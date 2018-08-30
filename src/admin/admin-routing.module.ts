import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';

import { AdminComponent } from './admin.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: '', redirectTo: '/admin/index', pathMatch: 'full' },
          { path: 'index', component: IndexComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

