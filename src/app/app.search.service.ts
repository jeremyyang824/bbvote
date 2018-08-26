import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AppServiceBase } from '@shared/app-service-base';

@Injectable()
export class AppSearchService {

  private topicSearchSource = new Subject<string>();

  topicSearch$ = this.topicSearchSource.asObservable();

  searchTopic(keywords: string) {
    this.topicSearchSource.next(keywords);
  }
}
