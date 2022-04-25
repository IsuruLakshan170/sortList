


import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() sourceArray: Array<any>=[];//get source array
  @Input() sourceTableColumnHeaders?:any;//get source item
  @Input() sourceFilter?:boolean;//get sort table header

  @Input() destinationTableColumnHeaders: Array<any>=[];//get destination table headers
  @Input() destinationFilter?:boolean;//get sort table header
  @Input() destinationFilterBy?:any;//get filer heading list
  @Input() destinationTableColumnHeaders1?: any;//get destination table headers

  @Input() sourceTableHeader?:any;//get filer heading list
  @Input() sourceTableColumnHeaders1?:any;//get filer heading list
  @Input() destinationTableHeader?:any;//get filer heading list

  @Input() destinationTableAddtionalHeader?:any;//get filer heading list
  @Input() destinationTableAddtionalColumnData?:any;//get filer heading list

  templateSourceTableHeader?:any;
  templateSourceTableColumnHeaders?:any;

  templateDestinationTableHeader?:any;
  templateDestinationTableColumnHeaders?:any;
  
  heading?: string=''; 

  header?: string=''; 


  templateDestinationTableAddtionalColumnHeaders?:any;
  templateDestinationTableAddtionalColumnData?:any;

  //source filter show or not
  sourceFilterIsShown: boolean = true; 
  //destination filter show or not
  destinationFilterIsShown: boolean = true; 
  //search item
  term: string ="";
  //source array
  camsSourceArray: any[]=[];
  //destination array
  camsDestinationArray: any[]=[];
  //source headers
 
  camsDestinationHeaders: any[]=[];
  //source original copy of array
  sourceArrayCopy: any[]=[];
  //sort out table header

  //right single arrow button disable true default
   rightButtonDisable =true;
   //left single arrow button disable true default
  leftButtonDisable =true;
  //drag item
  dragItem?: any;
   //selected item in drag
   selectedItem?: any;
  //destination search bar filter by
   camsDestinationFilterBy?:any;
  //source items column
  sourceArrayColumnItem: any[]=[];

  constructor() { }

  //initialization
  ngOnInit(): void {
    this.templateDestinationTableAddtionalColumnData =this.destinationTableAddtionalColumnData;
    this.templateDestinationTableAddtionalColumnHeaders=this.destinationTableAddtionalHeader;
    this.templateSourceTableHeader=this.sourceTableHeader;
    this.templateSourceTableColumnHeaders=this.sourceTableColumnHeaders1;
    this.templateDestinationTableHeader=this.destinationTableHeader;
    this.templateDestinationTableColumnHeaders =this.destinationTableColumnHeaders1;
    this.camsSourceArray = this.sourceArray;
    this.camsDestinationHeaders = this.destinationTableColumnHeaders;
    this.sourceArrayCopy =this.camsSourceArray; 
    this.camsDestinationFilterBy =this.destinationFilterBy;
    this.sourceArrayColumnItem=this.sourceTableColumnHeaders;
    if(this.sourceFilter == false){
      this.sourceFilterIsShown=false;
    }
    if(this.destinationFilter == false){
      this.destinationFilterIsShown=false;
    }

  }
  //this is use for primeNg erro for filter area then by using we can remove the error
  getEventValue($event:any) :string {
    return $event.target.value;
  } 

  //start drag
    dragStart(product: any) {
      console.log("drag start");
      this.dragItem = product;
  }
  // send to right
  dropRight() {
    console.log("drag drop");
      if (this.dragItem) {
          let draggedProductIndex = this.findIndexRight(this.dragItem);
          this.camsDestinationArray = [...this.camsDestinationArray, this.dragItem];
          this.camsSourceArray = this.camsSourceArray.filter((val,i) => i!=draggedProductIndex);
          this.dragItem = null;
      }
  }
  //send to left 
  dropLeft() {
    if (this.dragItem) {
        let draggedProductIndex = this.findIndexLeft(this.dragItem);
        this.camsSourceArray = [...this.camsSourceArray, this.dragItem];
        this.camsDestinationArray = this.camsDestinationArray.filter((val,i) => i!=draggedProductIndex);
        this.dragItem = 'null';
    }
  }
  //stop drag
  dragEnd() {
      console.log("drag stop");
      this.dragItem = null;
  }
  //find right side table selected row index
  findIndexRight(product: any) {
      let index = -1;
      for(let i = 0; i < this.camsSourceArray.length; i++) {
          if (product.id === this.camsSourceArray[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }
  //find left side table selected row index
  findIndexLeft(product: any) {
    let index = -1;
    for(let i = 0; i < this.camsDestinationArray.length; i++) {
        if (product.id === this.camsDestinationArray[i].id) {
            index = i;
            break;
        }
    }
    return index;
  }
  //one item push to right table
  rightPushOne(){
    
    console.log("rightPushOne");
    this.dropRight();
    this.rightButtonDisable =true;

  }
  //all items push to right table
  rightPushAll(){
    console.log("rightPushAll");
    this.camsDestinationArray =this.sourceArrayCopy;
    this.camsSourceArray =[];
    this.leftButtonDisable =true;
    this.rightButtonDisable =true;
  }
  //one item push to left table
  leftPushOne(){
    console.log("leftPushOne");
    this.dropLeft();
    this.leftButtonDisable =true;
  }
  //all items push to right table
  leftPushAll(){
    console.log("leftPushAll");
    this.camsSourceArray =this.sourceArrayCopy;
    this.camsDestinationArray =[];
    this.leftButtonDisable =true;
    this.rightButtonDisable =true;
  }
  //when click right table row single left side arrow button enable
  onClickRightCell(product: any){
    this.rightButtonDisable =false;
    this.dragItem =product;
    console.log("Right cell click");
    //this.leftButtonDisable =false;
  }
  //when click left table row single right side arrow button enable
  onClickLeftCell(product: any){
    this.leftButtonDisable =false;
    this.dragItem =product;
    console.log("left cell click");

  }

}
