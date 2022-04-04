import { Component, ViewEncapsulation } from '@angular/core';
import { BaseType } from 'd3-selection';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class MainComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];



  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  public data: Object[];
  public chartTitle: string;
  public ChartLabel: object;
  public legend: object;

  

  constructor(){
    // to show the heading
    this.chartTitle= 'Order Statics'
    this.ChartLabel={
      visible: true,
      position: 'Inside',
      name: 'text'
    }

    this.legend= {
      visible: true,
      position: 'Bottom',
      height: '8%',
      width: '35%'
    }
    // to show the data in pie chart
    this.data=[
    {name: 'Apple',value: 37, text: '37%'},
    {name: 'Orange',value: 17, text: '17%'},
    {name: 'Mango',value: 19, text: '19%'},
    {name: 'Banana',value: 4, text: '4%'},
    {name: 'Grapes',value: 11, text: '11%'},
    {name: 'Pineappple',value: 12, text: '12%'}

    ];  
    }

}
