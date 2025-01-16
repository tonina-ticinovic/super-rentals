import Route from '@ember/routing/route'; // this class is a starting point for adding functionality to a route

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  // this method is called when the route is entered and is responsible for fetching and preparing data
  // it's available in the route's .hbs file as @model and in the route's controller as this.model
  async model() {
    const response = await fetch('/api/rentals.json'); // fetch is a browser API for making HTTP requests
    const { data } = await response.json(); // this is how you parse JSON in JavaScript

    return data.map((model) => {
      const { attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { type, ...attributes };
    });
  }
}
