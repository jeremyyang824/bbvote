import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AppServiceBase } from '@shared/app-service-base';
import { MessageService } from '@shared/services/message.service';

import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService extends AppServiceBase {

  private topicsUrl = 'api/topics';  // URL to web api

  constructor(
    public messageService: MessageService,
    public http: HttpClient,
  ) {
    super(messageService);
  }

  /** GET topics from the server */
  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.topicsUrl)
      .pipe(
        tap(items => this.log('fetched topics')),
        catchError(this.handleError('getAllTopics', []))
      );
  }


}
