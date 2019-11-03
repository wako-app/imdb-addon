import { Component, Input } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';

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

  constructor(private browserService: BrowserService) {

  }

  viewOnImdb() {
    if (this.movie && this.movie.imdbId) {
      this.browserService.open(`http://www.imdb.com/title/${this.movie.imdbId}/`, false);
      return ;
    }

    if (this.show && this.episode && this.episode.imdbId) {
      this.browserService.open(`http://www.imdb.com/title/${this.episode.imdbId}/`, false);
      return ;
    }

    if ((this.show && this.episode && this.show.imdbId) || (this.show && this.show.imdbId)) {
      this.browserService.open(`http://www.imdb.com/title/${this.show.imdbId}/`, false);
      return ;
    }

  }
}
