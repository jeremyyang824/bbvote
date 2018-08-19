import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AppServiceBase } from '@shared/app-service-base';
import { MessageService } from '@shared/services/message.service';

import { Intention } from '../models/intention';
import { IntentionWithMyVote } from '../models/intention-with-my-vote';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExpectService extends AppServiceBase {

  private intentionsUrl = 'api/intentions';  // URL to web api

  constructor(
    public messageService: MessageService,
    public http: HttpClient,
  ) {
    super(messageService);
  }

  /** GET intentions from the server */
  getHotIntentions(): Observable<IntentionWithMyVote[]> {
    return this.http.get<IntentionWithMyVote[]>(this.intentionsUrl)
      .pipe(
        tap(items => this.log('fetched intentions')),
        catchError(this.handleError('getHotIntentions', []))
      );
  }

  voteForIntention(intention: Intention, isVoted: boolean) {
    const requestDto = Object.assign({}, intention, { 'isMyVoted': isVoted });
    return this.http.put(this.intentionsUrl, requestDto, httpOptions).pipe(
      tap(_ => this.log(`updated intention id=${intention.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
