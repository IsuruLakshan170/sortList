import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PickListModule} from 'primeng/picklist';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickListComponent } from './pick-list/pick-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PickListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
