import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickListComponent } from './pick-list/pick-list.component';
import { SelectedTableComponent } from './selected-table/selected-table.component';
const routes: Routes = [
  { path: '1', component: PickListComponent },
  { path: '', component: SelectedTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
