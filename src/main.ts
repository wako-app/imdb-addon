import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { PluginModule } from '../projects/plugin/src/plugin/plugin.module';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { WakoProviders } from '@wako-app/mobile-sdk';
import { PluginLoaderFakeService } from './app/services/plugin-loader-fake.service';
import { PluginLoaderService } from './app/services/plugin-loader.service';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { RouteReuseStrategy } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, TranslateModule.forRoot(), PluginModule),
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    {
      provide: PluginLoaderService,
      useClass: PluginLoaderFakeService,
    },
    ...WakoProviders,
    provideIonicAngular({
      swipeBackEnabled: true,
      backButtonText: '',
      mode: 'md',
    }),
  ],
}).catch((err) => console.log(err));
