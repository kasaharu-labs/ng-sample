import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-display-count',
  standalone: true,
  imports: [],
  templateUrl: './display-count.component.html',
  styleUrl: './display-count.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayCountComponent {

}
