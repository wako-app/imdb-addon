import { Component } from '@angular/core';
import { Show, ShowDetailBaseComponent } from '@wako-app/mobile-sdk';

@Component({
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.scss']
})
export class ShowButtonComponent extends ShowDetailBaseComponent {
  show: Show;

  setShow(show: Show): any {
    this.show = show;
  }
}
