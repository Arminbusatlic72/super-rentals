import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export interface CounterSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLDivElement;
}

export default class Counter extends Component<CounterSignature> {
  @tracked currentCount: number = 0;
  @action increment() {
    this.currentCount++;
  }
}
