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
import { FooterComponent } from './components/footer/footer.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    HeaderComponent, 
    DividerComponent, 
    FooterComponent, 
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    DividerComponent,
    HttpClientModule,
    FooterComponent,
    UnderConstructionComponent,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
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
