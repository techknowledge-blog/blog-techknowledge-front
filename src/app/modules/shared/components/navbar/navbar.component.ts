import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isBurgerMenu: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.navbar();
  }

  toggleMenu() {
    const navbar = document.getElementById('navbar');
    const btnClose = document.getElementById('btn-close');
    const btnOpen = document.getElementById('btn-mobile');

    if (!this.isBurgerMenu) {
      btnClose?.classList.add('close');
      btnOpen?.classList.add('icon-hamgurber-remove');

      btnClose?.addEventListener('click', () => {
        btnClose?.classList.remove('close');
        navbar?.classList.remove('active');
        btnOpen?.classList.remove('icon-hamgurber-remove');
      })
    }

    navbar?.classList.add('active');
  }

  navbar() {
    const btnMobile = document.getElementById('btn-mobile');

    btnMobile?.addEventListener('click', this.toggleMenu);
  }
}
