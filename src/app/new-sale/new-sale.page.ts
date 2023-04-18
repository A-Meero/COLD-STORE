import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FBService } from '../fb.service';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.page.html',
  styleUrls: ['./new-sale.page.scss'],
})
export class NewSalePage implements OnInit {

  selectedItem = {
    id: "",
    name: "Item",
    supplier: "Item Supplier",
    quantityPerBox: 0,
    stock: 0,
    threshhold:0,
    price:0,
    moving: "moving",
    category: "category"
  };
  saleQty = 0;

  constructor(public firestore: AngularFirestore, public loadingCtrl: LoadingController, public router: Router, public FB: FBService) { }

  ngOnInit() 
  {
  }

  async reportSale()
  {
    this.firestore.collection('sales').add({
      itemName: this.selectedItem.name,
      quantity: this.saleQty,
      totalPrice: this.selectedItem.price*this.saleQty
    })
    
    this.FB.updateItemQty(this.selectedItem, (this.selectedItem.stock-this.saleQty));
    const loader = await this.loadingCtrl.create({
      message: "Registering Purchase...",
      duration: 700,
      
      
    });
    loader.present();
    this.router.navigateByUrl('/employee-view')
  }

}
