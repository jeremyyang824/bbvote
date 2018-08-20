import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppComponentBase } from '@shared/app-component-base';
import { Topic } from 'models/topic';
import { TopicService } from 'services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent extends AppComponentBase implements OnInit {

  topics$: Observable<Topic[]>;

  totalItems = 1266;
  pageSize = 10;
  currentPage: number;

  constructor(
    private injector: Injector,
    private route: ActivatedRoute,
    private location: Location,
    private topicService: TopicService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.currentPage = +this.route.snapshot.paramMap.get('page');
    const start = (this.currentPage - 1) * this.pageSize;

    this.topics$ = this.topicService.getAllTopics();
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.location.go('/app/home/' + this.currentPage);
  }

}
