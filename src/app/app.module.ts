import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PopupComponent } from './components/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupContentComponent } from './components/popup-content/popup-content.component';
import { searchPipe } from './services/search-pipe';


@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, BrowserAnimationsModule],
  declarations: [AppComponent, HeaderComponent, ButtonComponent, PopupComponent, PopupContentComponent, searchPipe],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent,
    PopupContentComponent
  ]
})
export class AppModule {}
