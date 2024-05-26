import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DisplayCountComponent } from './views/display-count/display-count.component';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [DisplayCountComponent],
  templateUrl: './counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CounterPageComponent {
  count = signal(0);
}
