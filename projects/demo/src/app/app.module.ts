import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './controls/home/home.component';
import { ProadjectModule } from '@proadject/proadject-common';
import { ThemeBuilderModule } from '@lowcodeunit/lcu-theme-builder-common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    ProadjectModule.forRoot(),
    ThemeBuilderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ProadjectModule,
    ThemeBuilderModule
  ],
  entryComponents: []
})
export class AppModule { }
