import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import { CounterActionsComponent } from './views/counter-actions/counter-actions.component';
import { DisplayCountComponent } from './views/display-count/display-count.component';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [DisplayCountComponent, CounterActionsComponent],
  templateUrl: './counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CounterPageComponent {
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
      console.log(`The double count is: ${this.doubleCount()}`);
    });
  }

  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }

  reset() {
    this.count.set(0);
  }
}
