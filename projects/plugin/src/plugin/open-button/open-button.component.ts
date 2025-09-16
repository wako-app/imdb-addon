import { Component, Input } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';
import { logEvent } from '../services/tools';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'wk-open-button',
    templateUrl: './open-button.component.html',
    styleUrls: ['./open-button.component.scss'],
    imports: [IonicModule, TranslateModule]
})
export class OpenButtonComponent {
  @Input() movie: Movie;
  @Input() show: Show;
  @Input() episode: Episode;
  @Input() type: 'button' = 'button';

  constructor() {}

  viewOnImdb() {
    if (this.movie && this.movie.ids.imdb) {
      BrowserService.open(`http://www.imdb.com/title/${this.movie.ids.imdb}/`, false);
      logEvent('addon_tmdb', { type: 'movie' });
      return;
    }

    if (this.show && this.episode && this.episode.ids.imdb) {
      BrowserService.open(`http://www.imdb.com/title/${this.episode.ids.imdb}/`, false);
      logEvent('addon_tmdb', { type: 'episode' });
      return;
    }

    if ((this.show && this.episode && this.show.ids.imdb) || (this.show && this.show.ids.imdb)) {
      BrowserService.open(`http://www.imdb.com/title/${this.show.ids.imdb}/`, false);
      logEvent('addon_tmdb', { type: 'tv-show' });
      return;
    }
  }
}
