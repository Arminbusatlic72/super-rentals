import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('hello-world');
  this.route('episodes', function () {
    this.route('episode', { path: '/:slug' });
  });
});
