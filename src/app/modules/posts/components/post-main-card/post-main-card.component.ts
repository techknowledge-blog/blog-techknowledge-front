import { Component, Input, OnInit } from '@angular/core';
import { getLongDateFormat } from '../../../../modules/shared/utils/get-long-date-format.util';
import IPost from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-main-card',
  templateUrl: './post-main-card.component.html',
  styleUrls: ['./post-main-card.component.scss'],
})
export class PostMainCardComponent implements OnInit {
  @Input() mainPost?: IPost;
  formattedCreatedDate!: string;

  constructor() {}

  ngOnInit(): void {
    this.formattedCreatedDate = getLongDateFormat(this.mainPost?.createdAt!);
  }
}
