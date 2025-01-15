import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class Map extends Component {
  // getters cannot be tracked, but we still want to update the page if the arguments change
  // Ember does that automatically for us as long as dependencies are marked as @tracked
  // all arguments from this.args are tracked by default (they are auto-tracked)
  get src() {
    let { lng, lat, width, height, zoom } = this.args; // this.args is the way to access the arguments passed to the component (it comes from glimmer component)

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    // this is a getter function - this means it's accessible in this.token
  }
}
