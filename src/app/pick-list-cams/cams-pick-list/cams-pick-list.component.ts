
import { Component, OnInit,Input,EventEmitter, Output} from '@angular/core';
  @Component({
    selector: 'app-cams-pick-list',
    templateUrl: './cams-pick-list.component.html',
    styleUrls: ['./cams-pick-list.component.scss']
  })
  export class CamsPickListComponent implements OnInit {
  
    @Output() destinationArrayList:EventEmitter<any> =new EventEmitter();//send destination table data to parent 
  
    @Input() sourceArray: Array<any>=[];//get source array
    @Input() destinationArray: Array<any>=[];//get destination array
  
    @Input() sourceTableHeader?:any;//get source table header
    @Input() sourceTableColumnData?:any;//get source table column headers
    @Input() destinationTableHeader?:any;//get destination table header
    @Input() destinationTableColumnHeader?:any;//get destination table column headers
    @Input() destinationTableColumnData?:any;//get destination table column data
  
    @Input() sourceFilter?:boolean;//get source table filter
    @Input() destinationFilter?:boolean;//get destination table filter
    @Input() destinationFilterBy?:any;//get destination filter filter by parameter
  
    //source filter show or not
    sourceFilterIsShown: boolean = true; 
    //destination filter show or not
    destinationFilterIsShown: boolean = true; 
    //search item
    term: string ="";
  
    //source table original data coppy
    sourceArrayCopy: any[]=[];
  
    //right single arrow button dissable
     rightButtonDisable =true;
     //left single arrow button disable 
    leftButtonDisable =true;
    //drag item
     dragItem?: any;
     //selected item in drag
     selectedItem?: any;
  
    constructor() { }
  
    //initialization
    ngOnInit(): void {
      //coppy source array 
      this.sourceArrayCopy =this.sourceArray; 
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
            this.destinationArray = [...this.destinationArray, this.dragItem];
            this.sourceArray = this.sourceArray.filter((val,i) => i!=draggedProductIndex);
            this.destinationArrayList.emit(this.destinationArray);
            this.dragItem = null;
        }
    }
    //send to left 
    dropLeft() {
      if (this.dragItem) {
          let draggedProductIndex = this.findIndexLeft(this.dragItem);
          this.sourceArray = [...this.sourceArray, this.dragItem];
          this.destinationArray = this.destinationArray.filter((val,i) => i!=draggedProductIndex);
          this.destinationArrayList.emit(this.destinationArray);
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
        for(let i = 0; i < this.sourceArray.length; i++) {
            if (product.id === this.sourceArray[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
    //find left side table selected row index
    findIndexLeft(product: any) {
      let index = -1;
      for(let i = 0; i < this.destinationArray.length; i++) {
          if (product.id === this.destinationArray[i].id) {
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
      this.destinationArrayList.emit(this.destinationArray);
  
    }
    //all items push to right table
    rightPushAll(){
      console.log("rightPushAll");
      this.destinationArray =this.sourceArrayCopy;
      this.sourceArray =[];
      this.leftButtonDisable =true;
      this.rightButtonDisable =true;
      this.destinationArrayList.emit(this.destinationArray);
    }
    //one item push to left table
    leftPushOne(){
      console.log("leftPushOne");
      this.dropLeft();
      this.leftButtonDisable =true;
      this.destinationArrayList.emit(this.destinationArray);
  
    }
    //all items push to right table
    leftPushAll(){
      console.log("leftPushAll");
      this.sourceArray =this.sourceArrayCopy;
      this.destinationArray =[];
      this.leftButtonDisable =true;
      this.rightButtonDisable =true;
      this.destinationArrayList.emit(this.destinationArray);
  
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
  