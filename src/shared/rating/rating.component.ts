import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  private _marks: number;

  private _stars: number[] = [0, 0, 0, 0, 0];

  @Input()
  set marks(marks: number) {
    this._marks = marks;
    this.calculate();
  }

  get marks() { return this._marks; }

  constructor() { }

  ngOnInit() {
  }

  private calculate(): void {
    this._stars.splice(0, this._stars.length);

    // full stars
    const fullStars = this._marks >= 5 ? 5 : Math.floor(this._marks);
    const halfStars = Math.floor(Math.floor((this._marks - Math.floor(this._marks)) * 10) >= 5
      ? 1 : 0);
    const emptyStars = 5 - fullStars - halfStars;

    _.range(fullStars)
      .forEach(() => {
        this._stars.push(1);
      });
    _.range(halfStars)
      .forEach(() => {
        this._stars.push(2);
      });
    _.range(emptyStars)
      .forEach(() => {
        this._stars.push(0);
      });
  }

}
