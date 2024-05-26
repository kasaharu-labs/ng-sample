import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
  count = signal(0);

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
