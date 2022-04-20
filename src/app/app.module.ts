import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PickListModule} from 'primeng/picklist';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickListComponent } from './pick-list/pick-list.component';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    PickListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickListModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
