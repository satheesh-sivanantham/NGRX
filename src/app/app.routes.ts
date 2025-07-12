import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter-module/counter/counter.component';
import { PostListComponent } from './posts/post-list/post-list.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'counter', component:CounterComponent},
    {path:'posts', component:PostListComponent}
];
