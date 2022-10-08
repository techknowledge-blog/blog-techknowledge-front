import { getLongDateFormat } from './../../../shared/utils/get-long-date-format.util';
import { Component, Input, OnInit } from '@angular/core';
import IPost from '../../../../../app/modules/posts/interfaces/post.interface';

@Component({
  selector: 'app-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  constructor() {}

  @Input() post?: IPost;

  public isHovering: boolean = false;

  formattedCreatedDate!: string;

  ngOnInit(): void {
    this.formattedCreatedDate = getLongDateFormat(this.post?.createdAt!);
  }
}
