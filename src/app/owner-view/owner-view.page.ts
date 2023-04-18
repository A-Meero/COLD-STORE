import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FBService } from '../fb.service';
import { lastValueFrom } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-owner-view',
  templateUrl: './owner-view.page.html',
  styleUrls: ['./owner-view.page.scss'],
})
export class OwnerViewPage implements OnInit {

  shippedOrderCount = 0;

  constructor(private menu: MenuController, public loadingCtrl: LoadingController, public router: Router,public FB:FBService, public firestore: AngularFirestore) { }

  public userType = this.FB.getCookie("userType");
  public userName = this.FB.getCookie("userName");
  tradeRequestNumber = 0;

  checkUser(){
    if(this.FB.getCookie("userType"))
      this.navigateUser()
    else
    this.router.navigateByUrl('/');
  }

  navigateUser(){
    if (this.userType=="owner")
    this.router.navigateByUrl('/owner-view');
    else if(this.userType=="supplier")
    this.router.navigateByUrl('/supplier-view');
    else if (this.userType=="employee")
    this.router.navigateByUrl('/employee-view');
  }

  // ionViewWillLeave() 
  // {
  //   window.location.reload();
  // }

  async ngOnInit() 
  {
    this.checkUser();
    let x = this.firestore.collection('orders', ref =>
    ref.where('status', '==', 'Shipped')
    ).get();
    let y = await lastValueFrom(x)
    this.shippedOrderCount = y.size;

    x = this.firestore.collection('trades', ref =>
    ref.where('status', '==', 'Accepted')
    ).get();
    y = await lastValueFrom(x)
    this.tradeRequestNumber = y.size;

    x = this.firestore.collection('trades', ref =>
    ref.where('toName', '==', 'Shift Free')
    ).get();
    y = await lastValueFrom(x)
    this.tradeRequestNumber += y.size;
  }

  async openFirst()
  {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  logOut()
  {
    this.FB.SignOut()
    .then(()=>{
      this.FB.deleteCookie("userType");
      this.router.navigateByUrl('/login');
    })
  }

  async makeOrder()
  {
    this.router.navigateByUrl('/owner-order').then(()=>{
      window.location.reload();
    })
  }

  
}
