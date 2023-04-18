import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom } from 'rxjs';
import { FBService } from '../fb.service';

@Component({
  selector: 'app-owner-order-history',
  templateUrl: './owner-order-history.page.html',
  styleUrls: ['./owner-order-history.page.scss'],
})
export class OwnerOrderHistoryPage implements OnInit {

  orderHistorySegment = "incompleteOrders"
  completedOrderArray: any;
  incompletedOrderArray: any;

  constructor(public firestore: AngularFirestore, public FB: FBService) { }

  async ngOnInit() 
  {
    let x = this.firestore.collection('orders', ref =>
    ref.where('status', '!=', 'Completed')
    ).get();
    let y = await lastValueFrom(x);
    this.incompletedOrderArray = y.docs.map(doc => doc.data())

    x = this.firestore.collection('orders', ref =>
    ref.where('status', '==', 'Completed')
    ).get();
    y = await lastValueFrom(x);
    this.completedOrderArray = y.docs.map(doc => doc.data())
  }

}
