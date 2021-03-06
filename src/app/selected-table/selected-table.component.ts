import { Component, OnInit } from '@angular/core';
export interface type{
  id:number;
  text:string;
  position:string;

}
@Component({
  selector: 'app-selected-table',
  templateUrl: './selected-table.component.html',
  styleUrls: ['./selected-table.component.scss']
})
export class SelectedTableComponent implements OnInit {

  
  orderNo?: string ;

  public LevelName:type[] = [
    {id: 1, text: 'Floor',position:'1one'},
    {id: 2, text: 'Room',position:'2one'},
    {id: 3, text: 'Componenet Group',position:'3one'},
    {id: 4, text: 'Component Type',position:'4one'},
    {id: 5, text: 'Component',position:'5one'},
];
  public SelectedLevelName :type[]=[];
 
  public InitLevelComponets :type[]=[];

  draggedProduct?: any;
  RightClickCellData?: any;
  RightButtonDisable =true;
  LeftButtonDisable =true;
  leftenable? :boolean;
  constructor() { }

  ngOnInit(): void {
    this.InitLevelComponets =this.LevelName;
  }

  
  onClickRightCell(product: type){
    this.RightButtonDisable =false;
    this.draggedProduct =product;
    console.log("Right cell click");
     //this.LeftButtonDisable =false;
  }
  onClickLeftCell(product: type){
    console.log("left cell click");
    this.LeftButtonDisable =false;
    this.draggedProduct =product;

    

  }

  

  dragStart(product: type) {
    console.log(product);
    this.draggedProduct = product;
    console.log("RightPushOne");
}
drop() {
  console.log("drop on");

  if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.SelectedLevelName = [...this.SelectedLevelName, this.draggedProduct];
      this.LevelName = this.LevelName.filter((val,i) => i!=draggedProductIndex);
      this.draggedProduct = 'null';
  }
}
dropLeft() {
  if (this.draggedProduct) {
      let draggedProductIndex = this.findIndexSelectedLevel(this.draggedProduct);
      this.LevelName = [...this.LevelName, this.draggedProduct];
      this.SelectedLevelName = this.SelectedLevelName.filter((val,i) => i!=draggedProductIndex);
      this.draggedProduct = 'null';
  }
}
dragEnd() {
  console.log('drag end');
  this.draggedProduct = null;
}
findIndex(product: type) {
  let index = -1;
  for(let i = 0; i < this.LevelName.length; i++) {
      if (product.id === this.LevelName[i].id) {
          index = i;
          break;
      }
  }

  
  return index;
}
findIndexSelectedLevel(product: type) {
  let index = -1;
  for(let i = 0; i < this.SelectedLevelName.length; i++) {
      if (product.id === this.SelectedLevelName[i].id) {
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
  this.SelectedLevelName =this.InitLevelComponets;
  this.LevelName =[];
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
  this.LevelName =this.InitLevelComponets;
  this.SelectedLevelName =[];
  this.LeftButtonDisable =true;
  this.RightButtonDisable =true;

}

}
