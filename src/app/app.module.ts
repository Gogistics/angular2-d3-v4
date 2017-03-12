import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultComponent } from './shared/default/default.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
