import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../app-store/app-store.state';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { getPost } from '../store/post.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit{
post$!:Observable<Post[]>;

constructor(
  private store:Store<appState>
){}


ngOnInit(): void {
 this.post$ = this.store.select(getPost);
 console.log(this.post$)
}

}
