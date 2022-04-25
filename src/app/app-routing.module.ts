import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickListComponent } from './pick-list/pick-list.component';
import { SelectedTableComponent } from './selected-table/selected-table.component';
import {MainWindowComponent} from './main-window/main-window.component'
import {FilterTableComponent} from './filter-table/filter-table.component'
import {ExtendedPicklistComponent} from './extended-picklist/extended-picklist.component'

const routes: Routes = [

  { path: '5', component: ExtendedPicklistComponent },
  { path: '', component: MainWindowComponent },
  { path: '1', component: PickListComponent },
  { path: '2', component: SelectedTableComponent },
  { path: '4', component: FilterTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
