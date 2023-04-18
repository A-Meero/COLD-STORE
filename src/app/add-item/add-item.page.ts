import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FBService, item } from '../fb.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(public router: Router, public loadingCtrl: LoadingController, public FB:FBService) { }
  name = "";
  supplier = "";
  quantityPerBox = 0;
  stock = 0;
  threshhold = 0;
  price = 0;
  moving= "";
  category = "";


  newItem : item = {name: this.name, supplier: this.supplier ,
    quantityPerBox: this.quantityPerBox, stock: this.stock,
  threshhold:this.threshhold,  price:this.price, moving:this.moving, category:this.category};
  addItem(){

    this.newItem = {name: this.name, supplier: this.supplier ,
      quantityPerBox: this.quantityPerBox, stock: this.stock,
    threshhold:this.threshhold,  price:this.price, moving:this.moving, category:this.category};

      this.FB.additem(this.newItem)
    .then( ()=>{
        this.FB.Msg("Successfull",this.name+ " has been added as a new Item");})
    .catch( ()=>{
           this.FB.Msg("Oppppss"," Something went wrong please try again");
     })

    
}

  ngOnInit() {
  }

}
