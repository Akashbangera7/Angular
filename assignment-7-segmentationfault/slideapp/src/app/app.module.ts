import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SlideComponent } from './slide/slide.component';
import { DragDropDirectiveModule} from "angular4-drag-drop";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
