import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, LCUServiceSettings, MaterialModule } from '@lcu/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './controls/home/home.component';
import { ProadjectModule, ProadjectPointForecastElementComponent, UserProadjectStateContext } from 'projects/common/src/lcu.api';
import { environment } from '../environments/environment';

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
    ProadjectModule.forRoot()
  ],
  providers: [ {
    provide: LCUServiceSettings,
    useValue: FathymSharedModule.DefaultServiceSettings(environment)
  }],
  bootstrap: [AppComponent],
  exports: [ProadjectModule]
})
export class AppModule { }
