import { Component, OnInit } from '@angular/core';
import { Post, PostDetail } from '../model/post.model'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { Store } from '@ngrx/store';
import { addPost } from '../store/post.action';

@Component({
  selector: 'app-add-post',
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent {
  postItems:PostDetail = new PostDetail('','');

  constructor(
    private store:Store,
  ){}
  
  addPost(){
    console.log('Post Added', this.postItems)
    const post:Post = {
      title: this.postItems.title,
      description: this.postItems.description
    }
    this.store.dispatch(addPost({post}));
    this.postItems = new PostDetail('','');
  }

}
