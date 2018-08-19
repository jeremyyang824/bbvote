import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { AppComponentBase } from '@shared/app-component-base';
import { IntentionWithMyVote } from 'models/intention-with-my-vote';
import { ExpectService } from 'services/expect.service';

@Component({
  selector: 'app-expects',
  templateUrl: './expects.component.html',
  styleUrls: ['./expects.component.css']
})
export class ExpectsComponent extends AppComponentBase implements OnInit {

  intentions$: Observable<IntentionWithMyVote[]>;

  constructor(
    injector: Injector,
    private expectService: ExpectService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.intentions$ = this.expectService.getHotIntentions();
  }

  voteTopic(intention: IntentionWithMyVote, isVote: boolean) {
    console.log('voteTopic:' + intention.id + ' ' + isVote);
  }
}
