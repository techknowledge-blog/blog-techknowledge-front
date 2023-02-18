import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showMenuItems() {
    this.showMenu = !this.showMenu;
  }

  openDialog(): void {
    this.dialog.open(InfoModalComponent, {
      width: '500px',
      data: {
        modalTitle: 'Mikkaiser here',
        icon: 'warning',
        modalDescription: 'Mikkaiser description',
        positiveButtonMessage: 'MessageButtonOK',
        negativeMessageButton: 'MessageButtonNotOkay',
        hasNegativeButton: true,
      },
    });
  }
}
