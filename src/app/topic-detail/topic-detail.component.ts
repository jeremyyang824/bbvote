import { Component, OnInit, Injector, Input } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EChartOption } from 'echarts';

import { AppComponentBase } from '@shared/app-component-base';
import { Topic } from 'models/topic';
import { TopicService } from 'services/topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent extends AppComponentBase implements OnInit {

  loading = false;
  topic: Topic = new Topic();

  // my vote
  myPoint01 = 5;
  myPoint02 = 5;
  myPoint03 = 5;
  myPoint04 = 5;
  myFeedback: string;

  chartOption: EChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    radar: {
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: 'Subject', max: 5 },
        { name: 'Difficulty', max: 5 },
        { name: 'Practicability', max: 5 },
        { name: 'Infectivity', max: 5 },
        { name: 'Hot', max: 5 }
      ],
      radius: 150
    },
    series: [{
      name: 'Topic Avg Points',
      type: 'radar',
      tooltip: {
        trigger: 'item'
      },
      itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: [
        {
          value: [4.35, 3.23, 4.68, 4.12, 1.2]
        }
      ]
    }]
  };

  constructor(
    private injector: Injector,
    private topicService: TopicService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    super(injector);
  }

  ngOnInit() {
    this.getTopic();
  }

  getTopic(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(id)
      .subscribe(topic => this.topic = topic);
  }

  goBack(): void {
    this.location.back();
  }

  submitFeedback(): void {
    if (this.loading === false) {
      this.loading = true;
      this.getMockData()
        .subscribe((result) => {
          this.loading = false;
        });
    }
  }

  private getMockData(): Observable<string> {
    const subject = new Subject<string>();
    setTimeout(() => {
      subject.next('success');
    }, 2000);
    return subject;
  }
}
