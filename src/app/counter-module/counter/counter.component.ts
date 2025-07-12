import { Component } from '@angular/core';
import { CounterButtonsComponent } from "../counter-buttons/counter-buttons.component";
import { CouterOutputComponent } from "../couter-output/couter-output.component";
import { CustomCounterInputComponent } from '../custom-counter-input/custom-counter-input.component';


@Component({
  selector: 'app-counter',
  imports: [CounterButtonsComponent, CouterOutputComponent, CustomCounterInputComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

}
