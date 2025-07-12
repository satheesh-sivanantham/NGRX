import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 ngrxFeatures = [
    { title: 'Centralized Store', description: 'All application state is managed in a single store.' },
    { title: 'Unidirectional Data Flow', description: 'Data flows from action → reducer → store → UI.' },
    { title: 'Actions', description: 'Define events that describe what happened in the app.' },
    { title: 'Reducers', description: 'Pure functions that update state based on the received action.' },
    { title: 'Selectors', description: 'Retrieve and transform state slices for component use.' },
    { title: 'Effects', description: 'Handle async operations like HTTP requests outside of reducers.' },
    { title: 'Immutability', description: 'State is not mutated, but replaced with a new copy.' },
    { title: 'DevTools Support', description: 'Integrates with Redux DevTools for time-travel debugging.' },
    { title: 'Entity Adapter', description: 'Simplifies operations on lists of data (e.g., posts, users).' },
    { title: 'Router Store Integration', description: 'Connects Angular Router state with the NgRx store.' }
  ];
}
