import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { RatingComponent } from '@shared/rating/rating.component';
import { TeamColorDirective } from '@shared/team-color/team-color.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    RatingComponent,
    TeamColorDirective
  ],
  exports: [
    RatingComponent,
    TeamColorDirective,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AppRouteGuard
      ]
    };
  }
}
