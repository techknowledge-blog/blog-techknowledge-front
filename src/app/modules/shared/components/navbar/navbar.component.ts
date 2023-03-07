import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonTypeColorEnum } from '../../enums/button-type.enum';
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
        modalDescription:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
        positiveButtonMessage: 'Fechar',
        theme: ButtonTypeColorEnum.NEGATIVE
      },
    });
  }
}
