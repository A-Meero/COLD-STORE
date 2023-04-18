import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FBService, item } from '../fb.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  constructor(public FB:FBService, public alertCtrl: AlertController,public router: Router) { }

  supplier:any;
  category:any;
  selling:any;

  newThreshhold:any;
  newPrice:any;
  newMoving:any;
  hideOptions = false;
 

  updatItem : item = {name: "", supplier: "" ,
    quantityPerBox: 0, stock: 0,
  threshhold:0,  price:0, moving:"", category:""};


  DeleteItem(id:any){
    this.FB.deleteItem(id);
  }
   editItem(item:item){
    this.newMoving= item.moving;
    this.newPrice= item.price;
    this.newThreshhold= item.threshhold;
    this.showOptions(item);
    this.updatItem = item;
    
  }
  update(){
    this.updatItem.moving = this.newMoving;
    this.updatItem.price = this.newPrice;
    this.updatItem.threshhold = this.newThreshhold
    this.FB.updateItem(this.updatItem)
    .then( ()=>{
      this.FB.Msg("Successfull",this.updatItem.name+ " Updated!");         
  })
  .catch( ()=>{
    this.FB.Msg("Oppppss"," Something went wrong please try again");
  })
  }

  async showitemAlert(item: any)
  {
    let alert = await   this.alertCtrl.create({
      header: 'Item Details',
      message:  '<br> Name: ' + item.name+
                '<br> Category: '  + item.category+
                '<br> Selling: '+ item.moving+
                '<br> Unit Price : '  + item.price+' BD'+
                '<br> Units/Box: '+ item.quantityPerBox+
                '<br> Supplier: '+ item.supplier+
                '<br> Stock: '+ item.stock+
                '<br> Threshhold: '+ item.threshhold ,
      buttons: ['OK']
    });
    alert.present();
  }
  showOptions(item:item)
  {
    this.hideOptions = true;
  }


  ngOnInit() {
  }

}
