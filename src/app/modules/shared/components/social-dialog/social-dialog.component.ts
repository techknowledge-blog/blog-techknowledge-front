import { DialogDataInterface } from './../../interfaces/dialog-data.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-social-dialog',
  templateUrl: './social-dialog.component.html',
  styleUrls: ['./social-dialog.component.scss'],
})
export class SocialDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SocialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataInterface
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
