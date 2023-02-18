import { MatDividerModule } from '@angular/material/divider';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DividerComponent } from './components/divider/divider.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SocialDialogComponent } from './components/social-dialog/social-dialog.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    DividerComponent,
    FooterComponent,
    SocialDialogComponent,
    InfoModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    DividerComponent,
    InfoModalComponent,
    SocialDialogComponent,
    HttpClientModule,
    FooterComponent,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class SharedModule {
  /*
  forRoot method to be called in AppModule,
  ensuring that the SharedModule providers are imported once
  */

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
