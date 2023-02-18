import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  techknowledgedMedium: string = '#4f8aff';
  warningLight: string = '#FFD09B';

  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close();
  }
}
