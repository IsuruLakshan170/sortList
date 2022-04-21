import { Component, OnInit } from '@angular/core';
export interface type{
  id:number;
  text:string;
}
@Component({
  selector: 'app-selected-table',
  templateUrl: './selected-table.component.html',
  styleUrls: ['./selected-table.component.scss']
})
export class SelectedTableComponent implements OnInit {

  orderNo?: string ;

  public LevelName:type[] = [
    {id: 1, text: 'Floor'},
    {id: 2, text: 'Room'},
    {id: 3, text: 'Componenet Group'},
    {id: 4, text: 'Component Type'},
    {id: 5, text: 'Component'},
];
  public SelectedLevelName :type[]=[];

  draggedProduct?: any;


  
  constructor() { }

  ngOnInit(): void {
  }

  dragStart(product: type) {
    this.draggedProduct = product;
}
drop() {
  if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.SelectedLevelName = [...this.SelectedLevelName, this.draggedProduct];
      this.LevelName = this.LevelName.filter((val,i) => i!=draggedProductIndex);
      this.draggedProduct = 'null';
  }
}
dragEnd() {
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

moveToRight(){
    this.SelectedLevelName =this.LevelName;
}


}
