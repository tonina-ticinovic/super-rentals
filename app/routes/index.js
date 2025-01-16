import Route from '@ember/routing/route'; // this class is a starting point for adding functionality to a route

export default class IndexRoute extends Route {
  // this method is called when the route is entered and is responsible for fetching and preparing data
  // it's available in the route's .hbs file as @model and in the route's controller as this.model
  async model() {
    return [
      {
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: 'Estate',
        type: 'Standalone',
        bedrooms: 15,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description:
          'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
      },
    ];
  }
}
