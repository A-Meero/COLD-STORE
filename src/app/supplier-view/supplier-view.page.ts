import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable, count, lastValueFrom } from 'rxjs';
import { FBService } from '../fb.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.page.html',
  styleUrls: ['./supplier-view.page.scss'],
})

export class SupplierViewPage implements OnInit {

  orderCount = 0;
  username: any;

  constructor(public router: Router, public FB:FBService, public menu: MenuController, private firestore: AngularFirestore) { }

  public userType = this.FB.getCookie("userType");

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

  ionViewWillLeave() 
  {
    window.location.reload();
  }

  async ngOnInit() 
  {
    this.checkUser();

    this.username = this.FB.getCookie("userName")

    let x = this.firestore.collection('orders', ref =>
    ref.where('status', '==', 'Pending')
    ).get();
    let y = await lastValueFrom(x)
    this.orderCount = y.size;
  }

  async logOut()
  {
    this.FB.SignOut()
    .then(()=>{
      this.FB.deleteCookie("userType");
      this.FB.deleteCookie("userName");
      this.router.navigateByUrl('/login');
    })
  }

}
