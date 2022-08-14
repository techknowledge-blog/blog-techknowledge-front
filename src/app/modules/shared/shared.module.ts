import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [NavbarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, HeaderComponent],
})
export class SharedModule {}
