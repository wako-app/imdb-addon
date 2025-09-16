import { Component } from '@angular/core';

import { Platform } from '@ionic/angular/standalone';
import { AppService } from './services/app.service';

import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  ready = false;

  constructor(
    private platform: Platform,
    private appService: AppService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.appService.loadPlugins().subscribe(() => {
        this.ready = true;
      });
    });
  }
}
