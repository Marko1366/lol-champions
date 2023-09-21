import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DarkinsComponent } from './darkins/darkins.component';
import { DarkinCatalogueComponent } from './darkins/darkin-catalogue/darkin-catalogue.component';
import { DarkinFeatureComponent } from './darkins/darkin-feature/darkin-feature.component';
import { DarkinUnitComponent } from './darkins/darkin-catalogue/darkin-unit/darkin-unit.component';

import { AppRoutingModule } from './app-routing.module';
import { DarkinSetupComponent } from './darkins/darkin-setup/darkin-setup.component';
import { DarkinEditComponent } from './darkins/darkin-edit/darkin-edit.component';
import { DarkinService } from './darkins/darkin.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DarkinsComponent,
    DarkinCatalogueComponent,
    DarkinFeatureComponent,
    DarkinUnitComponent,
    DarkinSetupComponent,
    DarkinEditComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [DarkinService],
  bootstrap: [AppComponent],
})
export class AppModule {}
