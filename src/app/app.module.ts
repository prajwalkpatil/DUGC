import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UploadSheetsComponent } from './upload-sheets/upload-sheets.component';
import { DugcChairmanComponent } from './dugc-chairman/dugc-chairman.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainMenuComponent,
    UploadSheetsComponent,
    DugcChairmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
