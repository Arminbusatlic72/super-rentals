import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type Store from '@ember-data/store';
export default class EpisodesRoute extends Route {
  @service declare store: Store;

  model() {
    return this.store.findAll('episode');
  }
}
