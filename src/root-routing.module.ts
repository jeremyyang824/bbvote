import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app/home/1', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: './app/app.module#AppModule',
    data: { preload: true }
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RootRoutingModule { }
