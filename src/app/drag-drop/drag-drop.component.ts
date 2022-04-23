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
  selectedProduct1?: Product;
  availableProducts: Product[]=[];
    
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
  

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' }
  ];
  }

  dragStart(product: Product) {
    this.draggedProduct = product;
}

drop() {
    if (this.draggedProduct) {
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
        this.availableProducts = this.availableProducts.filter((val,i) => i!=draggedProductIndex);
        this.draggedProduct = null;
    }
}

dragEnd() {
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
