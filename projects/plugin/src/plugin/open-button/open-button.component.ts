import { Component, Input } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';
import { logEvent } from '../services/tools';

@Component({
  selector: 'wk-open-button',
  templateUrl: './open-button.component.html',
  styleUrls: ['./open-button.component.scss']
})
export class OpenButtonComponent {
  @Input() movie: Movie;
  @Input() show: Show;
  @Input() episode: Episode;
  @Input() type: 'button' = 'button';

  constructor() {}

  viewOnImdb() {
    if (this.movie && this.movie.imdbId) {
      BrowserService.open(`http://www.imdb.com/title/${this.movie.imdbId}/`, false);
      logEvent('addon_tmdb', { type: 'movie' });
      return;
    }

    if (this.show && this.episode && this.episode.imdbId) {
      BrowserService.open(`http://www.imdb.com/title/${this.episode.imdbId}/`, false);
      logEvent('addon_tmdb', { type: 'episode' });
      return;
    }

    if ((this.show && this.episode && this.show.imdbId) || (this.show && this.show.imdbId)) {
      BrowserService.open(`http://www.imdb.com/title/${this.show.imdbId}/`, false);
      logEvent('addon_tmdb', { type: 'tv-show' });
      return;
    }
  }
}
