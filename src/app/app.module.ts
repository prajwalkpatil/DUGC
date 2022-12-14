import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UploadSheetsComponent } from './upload-sheets/upload-sheets.component';
import { DugcChairmanComponent } from './dugc-chairman/dugc-chairman.component';
import { DugcComponent } from './dugc/dugc.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { SingleSheetUploadComponent } from './single-sheet-upload/single-sheet-upload.component';
import { ConsolidatedSheetUploadComponent } from './consolidated-sheet-upload/consolidated-sheet-upload.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainMenuComponent,
    UploadSheetsComponent,
    DugcChairmanComponent,
    DugcComponent,
    CoordinatorComponent,
    SingleSheetUploadComponent,
    ConsolidatedSheetUploadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
