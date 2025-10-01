import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxTabPanelModule } from 'devextreme-angular/ui/tab-panel';
import { DxSpeedDialActionModule } from 'devextreme-angular/ui/speed-dial-action';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTabPanelModule,
    DxSpeedDialActionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
