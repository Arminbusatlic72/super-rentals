import Model, { attr } from '@ember-data/model';

export default class EpisodeModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') slug;

  // Additional computed properties or methods can be added here
}
