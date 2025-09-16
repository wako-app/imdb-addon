import { Component } from '@angular/core';
import { Show, ShowDetailBaseComponent } from '@wako-app/mobile-sdk';
import { OpenButtonComponent } from '../open-button/open-button.component';

@Component({
    templateUrl: './show-button.component.html',
    styleUrls: ['./show-button.component.scss'],
    imports: [OpenButtonComponent]
})
export class ShowButtonComponent extends ShowDetailBaseComponent {
  show: Show;

  setShow(show: Show): any {
    this.show = show;
  }
}
