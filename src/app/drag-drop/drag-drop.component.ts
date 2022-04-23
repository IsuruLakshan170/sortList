import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  @Input() tableList: Array<any>=[];
  @Input() tablecol: Array<any>=[];
 
  cols: any[]=[];
  
  InitLevelComponets: any[]=[];

  selectedProduct1?: any;
  selectedProducts: any[]=[];
  selectedProducts1: any[]=[];
  draggedProduct?: any;
  products: any[]=[];



  RightClickCellData?: any;
  RightButtonDisable =true;
  LeftButtonDisable =true;
  leftenable? :boolean;
  constructor() { }

  ngOnInit(): void {
    this.products = this.tableList;
    this.cols = this.tablecol;
    this.InitLevelComponets =this.products;
  }

  dragStart(product: any) {
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

findIndex(product: any) {
    let index = -1;
    for(let i = 0; i < this.products.length; i++) {
        if (product.id === this.products[i].id) {
            index = i;
            break;
        }
    }
    return index;
}
findIndexLeft(product: any) {
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

onClickRightCell(product: any){
  this.RightButtonDisable =false;
  this.draggedProduct =product;
  console.log("Right cell click");
   //this.LeftButtonDisable =false;
}

onClickLeftCell(product: any){
  this.LeftButtonDisable =false;
  this.draggedProduct =product;
  console.log("left cell click");

}
onClickSelectedTableCell(){
  console.log("cell click");
}

}
