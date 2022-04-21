import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PickListModule} from 'primeng/picklist';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickListComponent } from './pick-list/pick-list.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { SelectedTableComponent } from './selected-table/selected-table.component';
import {DragDropModule} from 'primeng/dragdrop'
@NgModule({
  declarations: [
    AppComponent,
    PickListComponent,
    SelectedTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickListModule,
    ButtonModule,
    TableModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
