import { enableProdMode, importProvidersFrom } from '@angular/core';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicRouteStrategy } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TranslateModule } from '@ngx-translate/core';
import { WakoProviders } from '@wako-app/mobile-sdk';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      IonicModule.forRoot({
        swipeBackEnabled: true,
        backButtonText: '',
        mode: 'md',
      }),
      AppRoutingModule,
      TranslateModule.forRoot(),
      IonicStorageModule.forRoot({
        name: 'wako',
      }),
    ),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ...WakoProviders,
  ],
}).catch((err) => console.error(err));
