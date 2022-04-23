import { Component, OnInit } from '@angular/core';

export interface Product{
  id:number;
  code:string;
  name:string;
  category:string;
  quantity:string;
}
export interface Car{
  id:number;
  seet:string;
  price:string;
  color:string;
}

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
  colsProduct: any[]=[];
  colsCar: any[]=[];
  public products:Product[] = [
  
    {id:2, code: '2', name: '2Floor',category:'2one',quantity:'2new'},
    {id:3, code: '3', name: '3Floor',category:'3one',quantity:'3new'},
    {id:1, code: '4', name: '4Floor',category:'4one',quantity:'4new'},
    {id:2, code: '5', name: '5Floor',category:'5one',quantity:'5new'},
    {id:3, code: '6', name: '6Floor',category:'6one',quantity:'6new'},
  
  ];
  public cars:Car[] = [
  
    {id:1,  seet: 'seet',price:'1000',color:'red'},
    {id:2,  seet: 'ceel',price:'5533',color:'blue'},
    {id:3,  seet: 'seeccc',price:'33355',color:'green'},
    {id:4,  seet: 'exxx',price:'72220',color:'light'},
  
  ];
  constructor() { }

  ngOnInit(): void {
    
    this.colsProduct = [
      { field: 'id', header: 'Id' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
  ];
  this.colsCar = [
    { field: 'id', header: 'Id' },
    { field: 'seet', header: 'Seet' },
    { field: 'price', header: 'Price' },
    { field: 'color', header: 'Color' },
];


  }

}
