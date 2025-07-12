import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../store/counter.selectors';
import { appState } from '../../app-store/app-store.state';

@Component({
  selector: 'app-couter-output',
  imports:[CommonModule],
  templateUrl: './couter-output.component.html',
  styleUrl: './couter-output.component.scss'
})
export class CouterOutputComponent implements OnInit, OnDestroy {
  counter!: number;
  counterSubscription!:Subscription;
  counter$!:Observable<number>

  constructor(
    private store:Store<appState>
  ){}

  ngOnInit(){

    
    //Basic syntax to subscribe the counter value from store
    this.store.select(getCounter).subscribe((data) =>{
      console.log('counter observable is called')
      this.counter = data;
    })
    //if you want to unsubscribe the subcription 
    // this.counterSubscription = this.store.select('counter').subscribe((data) =>{
    //   this.counter = data.counter;
    // })
    //If you want to store it as observable 
    // this.counter$ = this.store.select('counter');
   
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
    this.counterSubscription.unsubscribe();
    }
  }

}
