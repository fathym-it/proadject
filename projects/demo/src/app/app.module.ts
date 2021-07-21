import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from 'projects/common/src/lib/common.module';
import { MaterialModule } from 'projects/common/src/lib/material.module';
// import { CommonModule, MaterialModule } from '@proadject/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
