import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppSearchService } from '../app.search.service';

import { AppComponentBase } from '@shared/app-component-base';
import { Topic } from 'models/topic';
import { TopicService } from 'services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent extends AppComponentBase implements OnInit, OnDestroy {

  topics$: Observable<Topic[]>;
  subscription: Subscription;

  totalItems = 1266;
  pageSize = 10;
  currentPage: number;
  keywords: string;

  constructor(
    private injector: Injector,
    private route: ActivatedRoute,
    private location: Location,
    private appSearchService: AppSearchService,
    private topicService: TopicService
  ) {
    super(injector);

    this.subscription = appSearchService.topicSearch$.subscribe(
      keywords => {
        this.keywords = keywords;
        console.log(this.keywords);
      });
  }

  ngOnInit() {
    this.currentPage = +this.route.snapshot.paramMap.get('page');
    const start = (this.currentPage - 1) * this.pageSize;

    this.topics$ = this.topicService.getAllTopics();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.location.go('/app/home/' + this.currentPage);
  }

}
