import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DividerComponent } from './components/divider/divider.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    CardComponent,
    DividerComponent,
  ],
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  exports: [NavbarComponent, HeaderComponent, CardComponent],
})
export class SharedModule {}
