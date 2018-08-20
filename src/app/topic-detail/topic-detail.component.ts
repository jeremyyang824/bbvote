import { Component, OnInit, Injector, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AppComponentBase } from '@shared/app-component-base';
import { Topic } from 'models/topic';
import { TopicService } from 'services/topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent extends AppComponentBase implements OnInit {

  private appTeamColor = 'SPIRIT';
  topic: Topic;

  constructor(
    private injector: Injector,
    private topicService: TopicService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    super(injector);
  }

  ngOnInit() {
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(id)
      .subscribe(topic => this.topic = topic);
  }

  goBack(): void {
    this.location.back();
  }
}
