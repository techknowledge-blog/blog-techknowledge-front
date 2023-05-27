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
        modalTitle: 'Oops!!!',
        modalDescription:
          'Este espaço ainda está em construção! Você não perde por esperar!',
        positiveButtonMessage: 'Fechar',
        theme: ButtonTypeColorEnum.WARNING,
      },
    });
  }
}
