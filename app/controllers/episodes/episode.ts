import Controller from '@ember/controller';
import type Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EpisodesEpisodeController extends Controller {
  @service declare router: Route;
}
