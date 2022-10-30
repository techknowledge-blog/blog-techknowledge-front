import { SocialDialogComponent } from './../social-dialog/social-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public dialog: MatDialog) {}

  openDialog(socialOption: string): void {
    const dialogRef = this.dialog.open(SocialDialogComponent, {
      width: '250px',
      data: { name: 'Mikkaiser', animal: 'MIkkaiser Animal' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
