import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppComponentBase implements OnInit {

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
  }

}
