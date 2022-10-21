import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdaComponent } from './tda/tda.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ReactiveapproachComponent } from './reactiveapproach/reactiveapproach.component';

@NgModule({
  declarations: [
    AppComponent,
    TdaComponent,
    ReactiveapproachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
