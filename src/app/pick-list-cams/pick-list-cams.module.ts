import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCamsPickListComponent } from './test-cams-pick-list/test-cams-pick-list.component';
import { FormsModule } from '@angular/forms';
import {PickListModule} from 'primeng/picklist';
import {DragDropModule} from 'primeng/dragdrop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {OrderListModule} from 'primeng/orderlist';
import {TableModule} from 'primeng/table';
import { CamsPickListComponent } from './cams-pick-list/cams-pick-list.component';

@NgModule({
  declarations: [
    TestCamsPickListComponent,
    CamsPickListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PickListModule,
    DragDropModule,
    NgbModule,
    Ng2SearchPipeModule,
    OrderListModule,
    TableModule
  ],
  exports:[
    TestCamsPickListComponent,
    CamsPickListComponent
  ]
})
export class PickListCamsModule {


 }
