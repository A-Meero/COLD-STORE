import { Injectable } from '@angular/core';

interface Item{
  Name:string,
  Info:string,
  Price:number,
  Qty:number,
  Image:string
}

@Injectable({
  providedIn: 'root'
})

export class DataListService {
  List:Item[]=[
    {
      Name:"Hamoor",
      Info:"Known as the brownspotte awdsfer",
      Price:3.5,
      Qty:0,
      Image:"1.jpg"
    },
    {
      Name:"Sea bass",
      Info:"sea bass is a common naawdasdwr",
      Price:2,
      Qty:0,
      Image:"2.jpg"
    },
    {
      Name:"shrimp",
      Info:"shrimp are decapod crusta asfgr4t",
      Price:1.5,
      Qty:0,
      Image:"3.jpg"
    }
  ]
  constructor() { }
}
