import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FBService } from '../fb.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.page.html',
  styleUrls: ['./employee-view.page.scss'],
})
export class EmployeeViewPage implements OnInit {

  constructor(public router: Router,public FB:FBService, public firestore: AngularFirestore) { }

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

  async ngOnInit() {
    this.checkUser();

    let x = this.firestore.collection('trades', ref =>
    ref.where('status', '==', 'Sent').where('toName', '==', this.userName)
    ).get();
    let y = await lastValueFrom(x)
    this.tradeRequestNumber = y.size;
  }

  logOut()
  {
    this.FB.SignOut()
    .then(()=>{
      this.FB.deleteCookie("userType");
      this.FB.deleteCookie("userName");
      this.router.navigateByUrl('/login');
    })
  }

  ionViewDidLeave() {
    window.location.reload();
  }
}
