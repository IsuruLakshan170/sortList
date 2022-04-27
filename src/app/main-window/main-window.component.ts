import { Component, OnInit, Output,EventEmitter } from '@angular/core';

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

    displayBasic?: boolean=false;
    displayBasic1?: boolean=false;
    displayBasic2?: boolean=false;
    displayBasic3?: boolean=false;
    displayBasic4?: boolean=true;
    position?: string;
    displayPosition?: boolean;

    productSourceHeader?:string="Component List";
    ProductDestinationHeader?:string="Sorted Products";

    sortedProducts :Product[]=[];
// product table array
  public products:Product[] = [
    {id:1, code: '12', name: 'Floor',category:'seera',quantity:'1000'},
    {id:2, code: '53', name: 'Room',category:'hetro',quantity:'500'},
    {id:3, code: '46', name: 'Component Group',category:'auto',quantity:'40'},
    {id:4, code: '65', name: 'Component Type',category:'mpu',quantity:'866'},
    {id:5, code: '96', name: 'Component',category:'nic',quantity:'80'},
  
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
  
  onDelete(product:any){
    this.sortedProducts = this.sortedProducts.filter(x =>x.id !=product.id);
    }



  showBasicDialog() {
    this.displayBasic =  true;
  }
  showBasicDialog1() {
    this.displayBasic1 =  true;
  }
  showBasicDialog2() {
    this.displayBasic2 =  true;
  }
  showBasicDialog3() {
    this.displayBasic3 =  true;
  }
  showBasicDialog4() {
    this.displayBasic4 =  true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}
setDeleteRow(product:any){
  this.sortedProducts=product;
}



}
