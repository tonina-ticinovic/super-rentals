import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImage extends Component {
  @tracked isLarge = false; // this is a tracked property - template will be re-rendered when it changes (so like state in React)

  @action toggleSize() {
    // @action indicates to Ember that we intend to use this method in a template
    this.isLarge = !this.isLarge;
  }
}
