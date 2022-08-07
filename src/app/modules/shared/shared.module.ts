import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, HeaderComponent],
})
export class SharedModule {}
