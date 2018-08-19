import { Intention } from './intention';

export class IntentionWithMyVote extends Intention {
  // tslint:disable-next-line:no-inferrable-types
  isMyVoted: boolean = false;
}
