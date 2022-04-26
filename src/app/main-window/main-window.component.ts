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
 
    
   

    productSourceHeader?:string="Component List";
    ProductDestinationHeader?:string="Sorted Products";
// product table array
  public products:Product[] = [
    {id:1, code: '2', name: 'Floor',category:'2one',quantity:'2new'},
    {id:2, code: '3', name: 'Room',category:'3one',quantity:'3new'},
    {id:3, code: '4', name: 'Component Group',category:'4one',quantity:'4new'},
    {id:4, code: '5', name: 'Component Type',category:'5one',quantity:'5new'},
    {id:5, code: '6', name: 'Component',category:'6one',quantity:'6new'},
  
  ];
  //product table source headers
  public productSourceHeaders:any[] = [
    { field: 'id', header: 'Id' },
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
  ];

  //product table destination headers
  public producttableItem:any[] = [
    { field: 'id',},
    { field: 'name',},
    { field: 'quantity',},
  ];

  //product table destination headers
  public productDestinationHeaders:any[] = [
    { field: 'id', header: 'Id' },
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
  ];

  productFilterByColumns: any=['name'];


  CarHeader?:string="Sorted Cars";
  public cars:Car[] = [
    {id:1,  seet: 'seet',price:'1000',color:'red'},
    {id:2,  seet: 'ceel',price:'5533',color:'blue'},
    {id:3,  seet: 'seeccc',price:'33355',color:'green'},
    {id:4,  seet: 'exxx',price:'72220',color:'light'},
  
  ];
    //car table source headers
  public carSourceHeaders:any[]  = [
    { field: 'id', header: 'Id' },
    { field: 'seet', header: 'Seet' },
    { field: 'price', header: 'Price' },
    { field: 'color', header: 'Color' },
];
  //car table source headers
  public carDestinationHeaders:any[]  = [
    { field: 'id', header: 'Id' },
    { field: 'seet', header: 'Seet' },
    { field: 'price', header: 'Price' },
    { field: 'color', header: 'Color' },
];

  constructor() { }

  ngOnInit(): void {
 

  }

}
