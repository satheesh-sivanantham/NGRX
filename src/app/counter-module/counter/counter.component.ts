import { Component } from '@angular/core';
import { CounterButtonsComponent } from "../counter-buttons/counter-buttons.component";
import { CouterOutputComponent } from "../couter-output/couter-output.component";
import { CustomCounterInputComponent } from '../custom-counter-input/custom-counter-input.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-counter',
  imports: [CounterButtonsComponent, CouterOutputComponent, CustomCounterInputComponent, RouterOutlet],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

}
