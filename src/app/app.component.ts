import { Component, AfterViewInit, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

import { AppSearchService } from './app.search.service';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppComponentBase implements OnInit, AfterViewInit {

  searchKeywords: string;

  constructor(
    private injector: Injector,
    private appSearchService: AppSearchService
  ) {
    super(injector);
  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

  }

  onSearch(): void {
    this.appSearchService.searchTopic(this.searchKeywords);
  }
}
