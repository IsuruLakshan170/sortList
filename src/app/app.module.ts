import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PickListModule} from 'primeng/picklist';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickListComponent } from './pick-list/pick-list.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { SelectedTableComponent } from './selected-table/selected-table.component';
import {DragDropModule} from 'primeng/dragdrop';
import {OrderListModule} from 'primeng/orderlist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MainWindowComponent } from './main-window/main-window.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { ExtendedPicklistComponent } from './extended-picklist/extended-picklist.component';
import {PickListCamsModule} from './pick-list-cams/pick-list-cams.module';
import { TestComponent } from './test/test.component'
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 @NgModule({
  declarations: [
    AppComponent,
    PickListComponent,
    SelectedTableComponent,
    MainWindowComponent,
    FilterTableComponent,
    ExtendedPicklistComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickListModule,
    ButtonModule,
    TableModule,
    DragDropModule,
    OrderListModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    PickListCamsModule,
    DialogModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
