import { Component, OnInit } from '@angular/core';
export interface Product{
 
  code:string;
  name:string;
  category:string;
  quantity:string;
}
export interface type{
  id:number;
  text:string;
  position:string;
}
@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {

    cols: any[]=[];
  orderNo?: string ;


public products:Product[] = [
  {code: '1', name: 'Floor',category:'1one',quantity:'new'},
  {code: '2', name: 'Floor',category:'1one',quantity:'new'},
  {code: '3', name: 'Floor',category:'1one',quantity:'new'},

];

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
    
    
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];

  }

  
}
