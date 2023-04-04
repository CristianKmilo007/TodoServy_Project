import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { ClientComponent } from './components/client/client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusinessComponent } from './components/business/business.component';
import { MainComponent } from './components/main/main.component';
import { ProfesionalComponent } from './components/profesional/profesional.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NavbarComponent,
    BusinessComponent,
    MainComponent,
    ProfesionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
