import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  standalone: true,
  imports: [],
  templateUrl: './counter-actions.component.html',
  styleUrl: './counter-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterActionsComponent {

}
