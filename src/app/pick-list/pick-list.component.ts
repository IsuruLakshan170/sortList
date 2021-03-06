import { Component, OnInit } from '@angular/core';
export interface Product{
  id:number;
  code:string;
  name:string;
  category:string;
  quantity:string;
}

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {

    cols: any[]=[];
  orderNo?: string ;
  availableProducts: Product[]=[];
    
  selectedProducts: Product[]=[];
  
  draggedProduct?: any;

public products:Product[] = [
  {id:1, code: '1', name: '1Floor',category:'1one',quantity:'1new'},
  {id:2, code: '2', name: '2Floor',category:'2one',quantity:'2new'},
  {id:3, code: '3', name: '3Floor',category:'3one',quantity:'3new'},

];


  RightClickCellData?: any;
  RightButtonDisable =true;
  LeftButtonDisable =true;
  leftenable? :boolean;
  constructor() { }

  ngOnInit(): void {

    
    
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];

  }

  onClick(){
    console.log("click");

  }

  dragStart(col:Product) {
    console.log(col);
    console.log("on drag");
}

drop() {
  console.log("drop on");

    if (this.draggedProduct) {
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
        this.availableProducts = this.availableProducts.filter((val,i) => i!=draggedProductIndex);
        this.draggedProduct = null;
    }
}

dragEnd() {
  console.log("drop end");
    this.draggedProduct = null;
}

findIndex(product: Product) {
    let index = -1;
    for(let i = 0; i < this.availableProducts.length; i++) {
        if (product.id === this.availableProducts[i].id) {
            index = i;
            break;
        }
    }
    return index;
}

}
