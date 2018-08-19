import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';

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
  currentPage = 1;

  constructor(
    injector: Injector,
    private topicService: TopicService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.topics$ = this.topicService.getAllTopics();
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
  }

}
