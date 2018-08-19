import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTeamColor]'
})
export class TeamColorDirective {

  private _color: string = null;
  private el: HTMLElement;

  @Input('appTeamColor')
  set backgroundColor(team: string) {
    this._color = null;

    if (team != null && team !== undefined) {
      team = team.trim().toUpperCase();

      if (team === 'SPEED') {
        this._color = '#28a745';
      } else if (team === 'SPIRIT') {
        this._color = '#007bff';
      }
    }

    if (this._color != null) {
      this.el.style.color = this._color;
    }
  }

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

}
