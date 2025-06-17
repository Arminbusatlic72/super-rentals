import Component from '@glimmer/component';
import EpisodeModel from '../models/episode';
export interface EpisodeSignature {
  // The arguments accepted by the component
  Args: {
    episode: EpisodeModel;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class Episode extends Component<EpisodeSignature> {
  get posterUrl() {
    const episode = this.args.episode;
    return `https://example.com/posters/${this.args.episode.slug}.jpg`; // Example URL, replace with actual logic
  }
}
