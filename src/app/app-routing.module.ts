import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickListComponent } from './pick-list/pick-list.component';
import { SelectedTableComponent } from './selected-table/selected-table.component';
import {DragDropComponent} from './drag-drop/drag-drop.component'
const routes: Routes = [
  { path: '', component: DragDropComponent },
  { path: '1', component: PickListComponent },
  { path: '2', component: SelectedTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
