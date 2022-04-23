import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  @Input() SourceArray: Array<any>=[];
  @Input() SourceHeaders: Array<any>=[];
  @Input() SortedTableHeader?:string;
  cols: any[]=[];
  
  InitLevelComponets: any[]=[];
  SelectedTableHeader?:string;
  selectedProduct1?: any;
  selectedProducts: any[]=[];
  selectedProducts1: any[]=[];
  draggedProduct?: any;
  //source array
  SrcArry: any[]=[];



  RightClickCellData?: any;
  RightButtonDisable =true;
  LeftButtonDisable =true;
  leftenable? :boolean;
  constructor() { }

  ngOnInit(): void {
    this.SelectedTableHeader =this.SortedTableHeader;
    this.SrcArry = this.SourceArray;
    this.cols = this.SourceHeaders;
    this.InitLevelComponets =this.SrcArry;
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
        this.SrcArry = this.SrcArry.filter((val,i) => i!=draggedProductIndex);
        this.draggedProduct = null;
    }
}
dropLeft() {
  if (this.draggedProduct) {
      let draggedProductIndex = this.findIndexLeft(this.draggedProduct);
      this.SrcArry = [...this.SrcArry, this.draggedProduct];
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
    for(let i = 0; i < this.SrcArry.length; i++) {
        if (product.id === this.SrcArry[i].id) {
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
  this.SrcArry =[];
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
  this.SrcArry =this.InitLevelComponets;
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
