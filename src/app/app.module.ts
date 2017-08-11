import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewComponent } from './quotes/new/new.component';
import { ListComponent } from './quotes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    NewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
