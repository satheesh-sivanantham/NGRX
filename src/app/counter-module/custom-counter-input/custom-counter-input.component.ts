import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { changeProjectName, customIncrement } from '../store/counter.actions';
import { getProjectName } from '../store/counter.selectors';
import { appState } from '../../app-store/app-store.state';

@Component({
  selector: 'app-custom-counter-input',
  imports: [FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.scss'
})
export class CustomCounterInputComponent implements OnInit {
  customCounter!:number;
  projectName!:string;


  constructor(
     private store:Store<CounterState>
  ){}

  ngOnInit(): void {
    
    this.store.select(getProjectName).subscribe(data =>{
      console.log('project name observable called')
      this.projectName = data;
    })
  }

  AddcustomCounter(){
    console.log(this.customCounter)
    this.store.dispatch(customIncrement({value:this.customCounter}))
  }

  changeProjectName(){
    this.store.dispatch(changeProjectName());
  }
}
