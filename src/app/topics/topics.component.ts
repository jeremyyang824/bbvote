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

  constructor(
    injector: Injector,
    private topicService: TopicService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.topics$ = this.topicService.getAllTopics();
  }

}
