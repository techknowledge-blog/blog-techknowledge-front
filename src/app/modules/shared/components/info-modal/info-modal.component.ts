import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonTypeColorEnum } from '../../enums/button-type.enum';
import { InfoModalInterface } from '../../interfaces/info-modal.interface';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InfoModalInterface
  ) {}


  ngOnInit(): void {
    if(this.data.theme == ButtonTypeColorEnum.WARNING)
      this.data.iconPath = 'warning-outline-icon.svg';

    if(this.data.theme == ButtonTypeColorEnum.WARNING)
      this.data.iconPath = 'warning-outline-icon.svg';

    if(this.data.theme == ButtonTypeColorEnum.WARNING)
      this.data.iconPath = 'warning-outline-icon.svg';
  }

  onClose() {
    this.dialogRef.close();
  }
}
