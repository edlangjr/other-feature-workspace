import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FSCButtonModule, FSCTextboxModule } from 'feature-shared-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FSCButtonModule,
    FSCTextboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
