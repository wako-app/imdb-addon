import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AddonSettingsComponent } from './addon-settings/addon-settings.component';
import { ModalController, IonicModule } from '@ionic/angular';
import { PluginLoaderService } from '../services/plugin-loader.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tab2',
    templateUrl: 'settings.page.html',
    styleUrls: ['settings.page.scss'],
    imports: [IonicModule, RouterLink]
})
export class SettingsPage implements OnInit {
  @ViewChild('settingsRef', { read: ViewContainerRef, static: true })
  settingsRef: ViewContainerRef;

  constructor(private pluginLoader: PluginLoaderService, private modalCtrl: ModalController) {}

  ngOnInit() {}

  async addonSettings() {
    const modal = await this.modalCtrl.create({
      component: AddonSettingsComponent
    });

    modal.present();
  }
}
