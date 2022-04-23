import { Component, OnInit } from '@angular/core';

export interface Product{
  id:number;
  code:string;
  name:string;
  category:string;
  quantity:string;
}

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
  cols: any[]=[];
  public products:Product[] = [
  
    {id:2, code: '2', name: '2Floor',category:'2one',quantity:'2new'},
    {id:3, code: '3', name: '3Floor',category:'3one',quantity:'3new'},
    {id:1, code: '4', name: '4Floor',category:'4one',quantity:'4new'},
    {id:2, code: '5', name: '5Floor',category:'5one',quantity:'5new'},
    {id:3, code: '6', name: '6Floor',category:'6one',quantity:'6new'},
  
  ];
  constructor() { }

  ngOnInit(): void {
    
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
   
  ];
  }

}
