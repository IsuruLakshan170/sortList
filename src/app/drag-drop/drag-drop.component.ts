import { Component, OnInit } from '@angular/core';
export interface Product{
  id:number;
  code:string;
  name:string;
  category:string;
  quantity:string;
}

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

 
  cols: any[]=[];
  
  InitLevelComponets: Product[]=[];

  selectedProduct1?: Product;
   selectedProducts: Product[]=[];
  selectedProducts1: Product[]=[];
  draggedProduct?: any;

  public products:Product[] = [
    {id:1, code: '1', name: '1Floor',category:'1one',quantity:'1new'},
    {id:2, code: '2', name: '2Floor',category:'2one',quantity:'2new'},
    {id:3, code: '3', name: '3Floor',category:'3one',quantity:'3new'},
    {id:1, code: '4', name: '4Floor',category:'4one',quantity:'4new'},
    {id:2, code: '5', name: '5Floor',category:'5one',quantity:'5new'},
    {id:3, code: '6', name: '6Floor',category:'6one',quantity:'6new'},
  
  ];
 public headers:any[] = [
    "id", "code", "name", "category", "quantity"
  ];

  RightClickCellData?: any;
  RightButtonDisable =true;
  LeftButtonDisable =true;
  leftenable? :boolean;
  constructor() { }

  ngOnInit(): void {
    this.InitLevelComponets =this.products;

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'quantity' }
  ];
  }

  dragStart(product: Product) {
    console.log("drag start");
    this.draggedProduct = product;
}

drop() {
  console.log("drag drop");
    if (this.draggedProduct) {
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
        this.products = this.products.filter((val,i) => i!=draggedProductIndex);
        this.draggedProduct = null;
    }
}
dropLeft() {
  if (this.draggedProduct) {
      let draggedProductIndex = this.findIndexLeft(this.draggedProduct);
      this.products = [...this.products, this.draggedProduct];
      this.selectedProducts = this.selectedProducts.filter((val,i) => i!=draggedProductIndex);
      this.draggedProduct = 'null';
  }
}
dragEnd() {
    console.log("drag stop");
    this.draggedProduct = null;
}

findIndex(product: Product) {
    let index = -1;
    for(let i = 0; i < this.products.length; i++) {
        if (product.id === this.products[i].id) {
            index = i;
            break;
        }
    }
    return index;
}
findIndexLeft(product: Product) {
  let index = -1;
  for(let i = 0; i < this.selectedProducts.length; i++) {
      if (product.id === this.selectedProducts[i].id) {
          index = i;
          break;
      }
  }
  return index;
}

RightPushOne(){
  
  console.log("RightPushOne");
  this.drop();
  this.RightButtonDisable =true;

}

RightPushAll(){
  console.log("RightPushAll");
  this.selectedProducts =this.InitLevelComponets;
  this.products =[];
  this.LeftButtonDisable =true;
  this.RightButtonDisable =true;
}



LeftPushOne(){
  console.log("LeftPushOne");
  this.dropLeft();
  this.LeftButtonDisable =true;
}

LeftPushAll(){
  console.log("LeftPushAll");
  this.products =this.InitLevelComponets;
  this.selectedProducts =[];
  this.LeftButtonDisable =true;
  this.RightButtonDisable =true;

}

onClickRightCell(product: Product){
  this.RightButtonDisable =false;
  this.draggedProduct =product;
  console.log("Right cell click");
   //this.LeftButtonDisable =false;
}

onClickLeftCell(product: Product){
  this.LeftButtonDisable =false;
  this.draggedProduct =product;
  console.log("left cell click");

}
onClickSelectedTableCell(){
  console.log("cell click");
}

}
