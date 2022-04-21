import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
export interface type{
  id:number;
  text:string;
}
@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {
  public LevelName:type[] = [
    {id: 1, text: 'Floor'},
    {id: 2, text: 'Room'},
    {id: 3, text: 'Componenet Group'},
    {id: 4, text: 'Component Type'},
    {id: 4, text: 'Component'},
];
  public SelectedLevelName :type[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
