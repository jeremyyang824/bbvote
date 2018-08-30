import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';

import { HomeComponent } from './home/home.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          { path: '', redirectTo: '/app/home/1', pathMatch: 'full' },
          { path: 'home', redirectTo: '/app/home/1', pathMatch: 'full' },
          { path: 'home/:page', component: HomeComponent, canActivate: [AppRouteGuard] },
          { path: 'detail/:id', component: TopicDetailComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

