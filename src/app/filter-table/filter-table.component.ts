import { Component, OnInit } from '@angular/core';
export interface Product{
  id:number;
  code:string;
  name:string;
  category:string;
  quantity:string;
}
@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnInit {
  public customers:Product[] = [
    {id:1, code: '2', name: '2Floor',category:'2one',quantity:'2new'},
    {id:2, code: '3', name: '3Floor',category:'3one',quantity:'3new'},
    {id:3, code: '4', name: '4Floor',category:'4one',quantity:'4new'},
    {id:4, code: '5', name: '5Floor',category:'5one',quantity:'5new'},
    {id:5, code: '6', name: '6Floor',category:'6one',quantity:'6new'},
  
  ];
  
  loading?: boolean;
  constructor() { }

  ngOnInit(): void {
  }


  getEventValue($event:any) :string {
    return $event.target.value;
  } 

}
