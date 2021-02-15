import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DxTabPanelModule, DxSpeedDialActionModule } from 'devextreme-angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxTabPanelModule,
        DxSpeedDialActionModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }