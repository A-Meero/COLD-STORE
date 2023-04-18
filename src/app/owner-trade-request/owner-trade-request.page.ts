import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FBService } from '../fb.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-owner-trade-request',
  templateUrl: './owner-trade-request.page.html',
  styleUrls: ['./owner-trade-request.page.scss'],
})
export class OwnerTradeRequestPage implements OnInit {

  public username = this.FB.getCookie("userName");
  public userType = this.FB.getCookie("userType");

  hideRequest = false;
  selectedTrade: any;
  tradeRequestNumber = 0;

  constructor(public FB: FBService, public firestore: AngularFirestore, public router: Router, public loadingCtrl: LoadingController) { }

  async ngOnInit() {
    let x = this.firestore.collection('trades', ref =>
    ref.where('status', '==', 'Accepted')
    ).get();
    let y = await lastValueFrom(x)
    this.tradeRequestNumber = y.size;

    x = this.firestore.collection('trades', ref =>
    ref.where('toName', '==', 'Shift Free')
    ).get();
    y = await lastValueFrom(x)
    this.tradeRequestNumber += y.size;
  }

  showShift(trade: any)
  {
    this.hideRequest = true;
    this.selectedTrade = trade;
  }

  async acceptRequest(trade: any)
  {
    let x = this.firestore.collection('schedules', ref =>
    ref.where('day', '==', trade.toDay).where('shift', '==', trade.toShift)
    ).get();
    let y = await lastValueFrom(x)
    let shiftDocIDArray = y.docs.map(doc => doc.id)

    this.firestore.collection('schedules').doc(shiftDocIDArray[0]).update({employeeName: trade.fromName})

    x = this.firestore.collection('schedules', ref =>
    ref.where('day', '==', trade.fromDay).where('shift', '==', trade.fromShift)
    ).get();
    y = await lastValueFrom(x)
    shiftDocIDArray = y.docs.map(doc => doc.id)

    this.firestore.collection('schedules').doc(shiftDocIDArray[0]).update({employeeName: trade.toName})
    this.FB.deleteTrade(trade);

    const loader = await this.loadingCtrl.create({
      message: "Confirming Received...",
      duration: 700,
    });
    loader.present();
    this.router.navigateByUrl('/owner-view')
  }
}
