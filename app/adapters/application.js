import RestAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RestAdapter {
  host = 'https://www.learnwithjason.dev';
  namespace = '/api/v2'; // Replace with your API host
}
