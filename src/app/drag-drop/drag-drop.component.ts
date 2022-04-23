import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  @Input() SourceArray: Array<any>=[];//get source array
  @Input() SourceHeaders: Array<any>=[];//get source table headers
  @Input() SortedTableHeader?:string;//get sort table header
  

 

  //DesArry1: any[]=[];


  //source array
  SrcArry: any[]=[];
  //destination array
  DesArry: any[]=[];
  //source headers
  SrcHeaders: any[]=[];
  //source original copy of array
  SrcArryCpy: any[]=[];
  //sort out table header
  SortTableHeader?:string;

  //RightClickCellData?: any;

  //right single arrow button disable true default
   RightButtonDisable =true;
   //left single arrow button disable true default
  LeftButtonDisable =true;
  //drag item
  DragItem?: any;
   //selected item in drag
   SelectedItem?: any;
  //leftenable? :boolean;
  constructor() { }

  ngOnInit(): void {
    this.SortTableHeader =this.SortedTableHeader;
    this.SrcArry = this.SourceArray;
    this.SrcHeaders = this.SourceHeaders;
    this.SrcArryCpy =this.SrcArry;
  }

  dragStart(product: any) {
    console.log("drag start");
    this.DragItem = product;
}

drop() {
  console.log("drag drop");
    if (this.DragItem) {
        let draggedProductIndex = this.findIndex(this.DragItem);
        this.DesArry = [...this.DesArry, this.DragItem];
        this.SrcArry = this.SrcArry.filter((val,i) => i!=draggedProductIndex);
        this.DragItem = null;
    }
}
dropLeft() {
  if (this.DragItem) {
      let draggedProductIndex = this.findIndexLeft(this.DragItem);
      this.SrcArry = [...this.SrcArry, this.DragItem];
      this.DesArry = this.DesArry.filter((val,i) => i!=draggedProductIndex);
      this.DragItem = 'null';
  }
}
dragEnd() {
    console.log("drag stop");
    this.DragItem = null;
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
  for(let i = 0; i < this.DesArry.length; i++) {
      if (product.id === this.DesArry[i].id) {
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
  this.DesArry =this.SrcArryCpy;
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
  this.SrcArry =this.SrcArryCpy;
  this.DesArry =[];
  this.LeftButtonDisable =true;
  this.RightButtonDisable =true;

}

onClickRightCell(product: any){
  this.RightButtonDisable =false;
  this.DragItem =product;
  console.log("Right cell click");
   //this.LeftButtonDisable =false;
}

onClickLeftCell(product: any){
  this.LeftButtonDisable =false;
  this.DragItem =product;
  console.log("left cell click");

}
onClickSelectedTableCell(){
  console.log("cell click");
}

}
