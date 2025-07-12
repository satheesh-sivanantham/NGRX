import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';
import { appState } from '../../app-store/app-store.state';


@Component({
  selector: 'app-counter-buttons',
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss'
})
export class CounterButtonsComponent {
  constructor(
    private store:Store<appState>
  ){}


increment() {
 this.store.dispatch(increment());
}

decrement() {
 this.store.dispatch(decrement());
}

reset() {
 this.store.dispatch(reset());
}

}
