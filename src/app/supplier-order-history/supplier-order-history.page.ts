import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom } from 'rxjs';
import { FBService } from '../fb.service';

@Component({
  selector: 'app-supplier-order-history',
  templateUrl: './supplier-order-history.page.html',
  styleUrls: ['./supplier-order-history.page.scss'],
})
export class SupplierOrderHistoryPage implements OnInit {

  orderHistorySegment = "incompleteOrders"
  completedOrderArray: any;
  incompletedOrderArray: any;

  public username = this.FB.getCookie("userName");
  public userType = this.FB.getCookie("userType");

  constructor(public firestore: AngularFirestore, public FB: FBService) { }

  async ngOnInit() 
  {
    console.log(this.username)
    let x = this.firestore.collection('orders', ref =>
    ref.where('status', 'in', ['Pending', 'Shipped']).where('supplierName', '==', this.username)
    ).get();
    let y = await lastValueFrom(x);
    this.incompletedOrderArray = y.docs.map(doc => doc.data())
    console.log(this.incompletedOrderArray)

    x = this.firestore.collection('orders', ref =>
    ref.where('status', '==', 'Completed').where('supplierName', '==', this.username)
    ).get();
    y = await lastValueFrom(x);
    this.completedOrderArray = y.docs.map(doc => doc.data())
  }

}
