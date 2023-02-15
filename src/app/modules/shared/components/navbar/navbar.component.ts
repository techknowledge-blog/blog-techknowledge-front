import { UnderConstructionComponent } from './../under-construction/under-construction.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnderConstructionDialogComponent } from '../under-construction-dialog/under-construction-dialog.component';

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
    this.dialog.open(UnderConstructionDialogComponent);
  }
}
