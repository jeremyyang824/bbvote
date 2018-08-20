import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { RatingModule } from 'ngx-bootstrap/rating';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './topics/topics.component';
import { ExpectsComponent } from './expects/expects.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicsComponent,
    ExpectsComponent,
    TopicDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    RatingModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  providers: []
})
export class AppModule { }
