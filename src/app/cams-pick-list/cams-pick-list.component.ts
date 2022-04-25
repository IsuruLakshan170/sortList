
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cams-pick-list',
  templateUrl: './cams-pick-list.component.html',
  styleUrls: ['./cams-pick-list.component.scss']
})
export class CamsPickListComponent implements OnInit {

  @Input() sourceArray: Array<any>=[];//get source array
  @Input() sourceHeaders: Array<any>=[];//get source table headers
  @Input() DestinationHeaders: Array<any>=[];//get destination table headers
  @Input() DestinationTableHeader?:string;//get sort table header
  @Input() SourceTableHeader?:string;//get sort table header
  @Input() SourceFilter?:boolean;//get sort table header
  @Input() DestinationFilter?:boolean;//get sort table header
  @Input() DestinationFilterBy?:any;//get filer heading list
  @Input() SourceHeaderItem?:any;//get source item

  SourceFilterisShown: boolean = true; 
  DestinationFilterisShown: boolean = true; 
  //search item
  term: string ="";
  //source array
  camsSourceArray: any[]=[];
  //destination array
  DesArry: any[]=[];
  //source headers
  SrcHeaders: any[]=[];
  //source original copy of array
  DesHeaders: any[]=[];
  //source original copy of array
  SrcArryCpy: any[]=[];
  //sort out table header
  SortTableHeader?:string;
 //sort out table header
  sourceTableHeader?:string;
  //right single arrow button disable true default
   RightButtonDisable =true;
   //left single arrow button disable true default
  LeftButtonDisable =true;
  //drag item
  DragItem?: any;
   //selected item in drag
   SelectedItem?: any;
  
   FilterList?:any;
  //leftenable? :boolean;
  //source items column
  sourceArrayColumnItem: any[]=[];

  constructor() { }

  //initialization
  ngOnInit(): void {
    this.SortTableHeader =this.DestinationTableHeader;
    this.sourceTableHeader =this.SourceTableHeader;
    this.camsSourceArray = this.sourceArray;
    this.SrcHeaders = this.sourceHeaders;
    this.DesHeaders = this.DestinationHeaders;
    this.SrcArryCpy =this.camsSourceArray; 
    this.FilterList =this.DestinationFilterBy;
    this.sourceArrayColumnItem=this.SourceHeaderItem;
    if(this.SourceFilter == false){
      this.SourceFilterisShown=false;
    }
    if(this.DestinationFilter == false){
      this.DestinationFilterisShown=false;
    }

  }

  getEventValue($event:any) :string {
    return $event.target.value;
  } 

  //start drag
    dragStart(product: any) {
      console.log("drag start");
      this.DragItem = product;
  }
  // send to right
  dropRight() {
    console.log("drag drop");
      if (this.DragItem) {
          let draggedProductIndex = this.findIndexRight(this.DragItem);
          this.DesArry = [...this.DesArry, this.DragItem];
          this.camsSourceArray = this.camsSourceArray.filter((val,i) => i!=draggedProductIndex);
          this.DragItem = null;
      }
  }
  //send to left 
  dropLeft() {
    if (this.DragItem) {
        let draggedProductIndex = this.findIndexLeft(this.DragItem);
        this.camsSourceArray = [...this.camsSourceArray, this.DragItem];
        this.DesArry = this.DesArry.filter((val,i) => i!=draggedProductIndex);
        this.DragItem = 'null';
    }
  }
  //stop drag
  dragEnd() {
      console.log("drag stop");
      this.DragItem = null;
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
    for(let i = 0; i < this.DesArry.length; i++) {
        if (product.id === this.DesArry[i].id) {
            index = i;
            break;
        }
    }
    return index;
  }
  //one item push to right table
  RightPushOne(){
    
    console.log("RightPushOne");
    this.dropRight();
    this.RightButtonDisable =true;

  }
  //all items push to right table
  RightPushAll(){
    console.log("RightPushAll");
    this.DesArry =this.SrcArryCpy;
    this.camsSourceArray =[];
    this.LeftButtonDisable =true;
    this.RightButtonDisable =true;
  }
  //one item push to left table
  LeftPushOne(){
    console.log("LeftPushOne");
    this.dropLeft();
    this.LeftButtonDisable =true;
  }
  //all items push to right table
  LeftPushAll(){
    console.log("LeftPushAll");
    this.camsSourceArray =this.SrcArryCpy;
    this.DesArry =[];
    this.LeftButtonDisable =true;
    this.RightButtonDisable =true;

  }
  //when click right table row single left side arrow button enable
  onClickRightCell(product: any){
    this.RightButtonDisable =false;
    this.DragItem =product;
    console.log("Right cell click");
    //this.LeftButtonDisable =false;
  }
  //when click left table row single right side arrow button enable
  onClickLeftCell(product: any){
    this.LeftButtonDisable =false;
    this.DragItem =product;
    console.log("left cell click");

  }

}
