import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  showMenuItems() {
    this.showMenu = !this.showMenu;
  }
}
