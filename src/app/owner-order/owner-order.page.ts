import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { formatDate } from '@angular/common';
import { FBService } from '../fb.service';

@Component({
  selector: 'app-owner-order',
  templateUrl: './owner-order.page.html',
  styleUrls: ['./owner-order.page.scss'],
})

export class OwnerOrderPage implements OnInit {

  constructor(public firestore: AngularFirestore, public loadingCtrl: LoadingController, public router: Router, public FB: FBService) { }

  shippedOrderArray: any;
  shippedOrderDocIDArray = [""];
  shippedOrderCount = 0;
  selectedShipment: any;
  selectedShipmentDocID: any;
  hideOptions = false;
  orderSegment = "makeOrder";
  date = "";

  selectedItem = {
    name: "Item",
    supplier: "Item Supplier",
    quantityPerBox: 0,
    stock: 0,
    threshhold:0,
    price:0,
    moving: "moving",
    category: "category"
  };
  cartonQty = 0;
  selectItem: any;
  selectedItemDocID: any;

  async ngOnInit() 
  {
    let x = this.firestore.collection('orders', ref =>
    ref.where('status', '==', 'Shipped')
    ).get();
    let y = await lastValueFrom(x);
    this.shippedOrderArray = y.docs.map(doc => doc.data())
    this.shippedOrderCount = this.shippedOrderArray.length;
    this.shippedOrderDocIDArray = y.docs.map(doc => doc.id)

    this.date = formatDate(Date.now(),'dd/MM/YYYY', 'en-GB');
  }

  async showOptions(order: any)
  {
    this.selectedShipment = order;
    this.hideOptions = true;
    this.selectedShipmentDocID = this.shippedOrderDocIDArray[this.shippedOrderArray.indexOf(order)];

    let x = this.firestore.collection('itemsTable', ref =>
    ref.where('name', '==', this.selectedShipment.itemName)
    ).get();
    let y = await lastValueFrom(x);
    this.selectItem = y.docs.map(doc => doc.data())[0]
    this.selectedItemDocID = y.docs.map(doc => doc.id)[0]
  }

  async confirmShipment()
  {
    this.firestore.collection('orders').doc(this.selectedShipmentDocID).update({status: "Completed"});

    let updatedQty = this.selectItem.stock + (this.selectedShipment.quantity*this.selectItem.quantityPerBox);
    this.firestore.collection('itemsTable').doc(this.selectedItemDocID).update({stock: updatedQty});
    // this.FB.updateItemQty(this.selectedItem, updatedQty);

    const loader = await this.loadingCtrl.create({
      message: "Confirming Received...",
      duration: 700,
    });
    loader.present();
    this.router.navigateByUrl('/owner-view')
  }

  async makeOrder()
  {
    this.firestore.collection('orders').add({
      itemName: this.selectedItem.name,
      orderDate: this.date,
      quantity: this.cartonQty,
      status: "Pending",
      supplierName: this.selectedItem.supplier
    })


    const loader = await this.loadingCtrl.create({
      message: "Placing Order...",
      duration: 700,
    });
    loader.present();
    this.ngOnInit();
    this.router.navigateByUrl('/owner-view')
  }

}