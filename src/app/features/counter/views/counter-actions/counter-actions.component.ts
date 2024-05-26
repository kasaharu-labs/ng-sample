import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  standalone: true,
  imports: [],
  templateUrl: './counter-actions.component.html',
  styleUrl: './counter-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterActionsComponent {
  plusButtonClicked = output<void>();
  minusButtonClicked = output<void>();
  resetButtonClicked = output<void>();

  onClickPlusButton() {
    this.plusButtonClicked.emit();
  }

  onClickMinusButton() {
    this.minusButtonClicked.emit();
  }

  onClickResetButton() {
    this.resetButtonClicked.emit();
  }
}
