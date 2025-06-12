import Route from '@ember/routing/route';

export default class HelloWorldRoute extends Route {
  model() {
    return {
      message: 'Hello, World!',
    };
  }
}
