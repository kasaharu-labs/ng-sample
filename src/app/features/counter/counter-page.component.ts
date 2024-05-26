import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {

}
