import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { FBService } from '../fb.service';

@Component({
  selector: 'app-supplier-order',
  templateUrl: './supplier-order.page.html',
  styleUrls: ['./supplier-order.page.scss'],
})

export class SupplierOrderPage implements OnInit {
  
  orderArray = [] as any[];
  docIDArray = [""];
  selectedOrder: any;
  hideOptions = false;
  selectedDocID: any;

  public username = this.FB.getCookie("userName");
  public userType = this.FB.getCookie("userType");

  constructor(private firestore: AngularFirestore, public loadingCtrl: LoadingController, public router: Router, public FB:FBService) { }
  
  async ngOnInit() 
  {
    let x = this.firestore.collection('orders', ref =>
    ref.where('status', '==', 'Pending').where('supplierName', '==', this.username)
    ).get();
    let y = await lastValueFrom(x);
    this.orderArray = y.docs.map(doc => doc.data())
    this.docIDArray = y.docs.map(doc => doc.id)

    console.log(this.orderArray)
  }

  showOptions(order: any)
  {
    this.selectedOrder = order;
    this.hideOptions = true;
    this.selectedDocID = this.docIDArray[this.orderArray.indexOf(order)];
  }

  async confirmShipment()
  {
    this.firestore.collection('orders').doc(this.selectedDocID).update({status: "Shipped"})
    const loader = await this.loadingCtrl.create({
      message: "Confirming Shipment...",
      duration: 700,
      
      
    });
    loader.present();
    this.router.navigateByUrl('/supplier-view')
  }
}
