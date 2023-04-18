import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FBService } from '../fb.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-employee-trade-shifts',
  templateUrl: './employee-trade-shifts.page.html',
  styleUrls: ['./employee-trade-shifts.page.scss'],
})
export class EmployeeTradeShiftsPage implements OnInit {

  tradeShift = "makeRequest"
  scheduleDay = "Sunday"
  selectedShift: any;
  selectTradeShift: any;
  hideShift = false;
  tradeRequestNumber = 0;
  public username = this.FB.getCookie("userName");
  public userType = this.FB.getCookie("userType");

  hideRequest = false;
  selectedTrade: any;

  constructor(public FB: FBService, public firestore: AngularFirestore, public loadingCtrl: LoadingController, public router: Router) { }

  async ngOnInit() 
  {
    let x = this.firestore.collection('trades', ref =>
    ref.where('status', '==', 'Sent').where('toName', '==', this.username)
    ).get();
    let y = await lastValueFrom(x)
    this.tradeRequestNumber = y.size;
  }

  showShift(shift: any)
  {
    this.selectedShift = shift;
    this.hideShift = true;
  }

  async requestTrade()
  {
    this.firestore.collection('trades').add({
      fromDay: this.selectTradeShift.day,
      fromShift: this.selectTradeShift.shift,
      fromName: this.selectTradeShift.employeeName,
      toDay: this.selectedShift.day,
      toShift: this.selectedShift.shift,
      toName: this.selectedShift.employeeName,
      status: "Sent"
    })
    const loader = await this.loadingCtrl.create({
      message: "Sending Request...",
      duration: 700,
      
      
    });
    loader.present();
    this.router.navigateByUrl('/employee-view')
    this.hideShift = false;
  }

  showRequest(trade: any)
  {
    this.selectedTrade = trade;
    this.hideRequest = true;
  }

  async acceptRequest(trade: any)
  {
    this.FB.updateTradeAccept(trade);
    const loader = await this.loadingCtrl.create({
      message: "Accepting Request...",
      duration: 700,
    });
    loader.present();
    this.router.navigateByUrl('/employee-view')
  }
}
