import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PageContentNavComponent } from './page-content/page-content-nav/page-content-nav.component';
import { PageContentDetailComponent } from './page-content/page-content-detail/page-content-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent, PageContentComponent, PageContentNavComponent, PageContentDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
