<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import IPost from 'src/app/modules/posts/interfaces/post.interface';
=======
import { getLongDateFormat } from './../../../shared/utils/get-long-date-format.util';
import { Component, Input, OnInit } from '@angular/core';
import IPost from '../../../../../app/modules/posts/interfaces/post.interface';
>>>>>>> 7020cc6d264c952165e842c39f920e35d691a320

@Component({
  selector: 'app-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  constructor() {}

<<<<<<< HEAD
  @Input() post!: IPost;

  public isHovering: boolean = false;

  ngOnInit(): void {}
=======
  @Input() post?: IPost;

  public isHovering: boolean = false;

  formattedCreatedDate!: string;

  ngOnInit(): void {
    this.formattedCreatedDate = getLongDateFormat(this.post?.createdAt!);
  }
>>>>>>> 7020cc6d264c952165e842c39f920e35d691a320
}
