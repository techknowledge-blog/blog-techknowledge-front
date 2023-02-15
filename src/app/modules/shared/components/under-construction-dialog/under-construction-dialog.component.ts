import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-under-construction-dialog',
  templateUrl: './under-construction-dialog.component.html',
  styleUrls: ['./under-construction-dialog.component.scss'],
})
export class UnderConstructionDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UnderConstructionDialogComponent>
  ) {}

  ngOnInit(): void {}
}
