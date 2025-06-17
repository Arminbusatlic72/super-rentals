// app/routes/episodes/episode.ts
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type Store from '@ember-data/store';
import type EpisodeModel from '../../models/episode';

export default class EpisodesEpisodeRoute extends Route {
  @service declare store: Store;

  async model(params: { slug: string }): Promise<EpisodeModel | undefined> {
    const episodes = await this.store.findAll('episode');
    return episodes.find((ep) => ep.slug === params.slug);
  }
}
