import Model, { attr } from '@ember-data/model';

export default class EpisodeModel extends Model {
  @attr('string') declare title: string;
  @attr('string') declare description: string;
  @attr('string') declare slug: string;
  @attr() declare guest: {
    image: string;
    name: string;
    twitter: string;
  };
  // Additional computed properties or methods can be added here
}
