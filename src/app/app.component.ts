import { Component, AfterViewInit, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppComponentBase implements OnInit, AfterViewInit {

  constructor(injector: Injector) {
    super(injector);
  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

  }

}
