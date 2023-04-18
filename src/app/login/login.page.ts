import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FBService } from '../fb.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public router: Router, public loadingCtrl: LoadingController, public FB:FBService, public firestore: AngularFirestore) {}
  // Variables
  public userType = this.FB.getCookie("userType");
  public username!: string;
  public password!: string;
  public usernameReg!: string;
  public passwordReg!: string;
 
  suppliersTable: any;
  suppliersUsername = [""];
  staffTable: any;
  
  checkUser(){
    if(this.FB.getCookie("userType"))
      this.navigateUser()
  }
  
  navigateUser(){
    if (this.userType=="owner")
    this.router.navigateByUrl('/owner-view');
    else if(this.userType=="supplier")
    this.router.navigateByUrl('/supplier-view');
    else if (this.userType=="employee")
    this.router.navigateByUrl('/employee-view');
  }
 
  SignIn(){
    this.FB.SignIn(this.username,this.password)
    .then( ()=>{
        this.FB.Msg("SignIn","Welcome "+ this.username);
        if(this.username == "owner@cs.com"){
          this.FB.setCookie("userType","owner")
          this.FB.setCookie("userName", "Owner")
          this.router.navigateByUrl('/owner-view');}
        else if(this.suppliersUsername.indexOf(this.username) != -1 || this.username == "supplier@cs.com"){
          this.FB.setCookie("userType","supplier")
          for(let element of this.suppliersTable)
          {
            if(this.username == element.email)
              this.FB.setCookie("userName", element.name)
          }
          this.router.navigateByUrl('/supplier-view');}
        else {
          this.FB.setCookie("userType","employee")
          for(let element of this.staffTable)
          {
            if(this.username == element.email)
              this.FB.setCookie("userName", element.name)
          }
          this.router.navigateByUrl('/employee-view');}

    })
    .catch( ()=>{
      this.FB.Msg("SignIn","Incorrect username or password");
    });
  }

  async ngOnInit() {
    this.checkUser();

    let x = this.firestore.collection('suppliersTable', ref =>
    ref.where('email', '!=', '')
    ).get();
    let y = await lastValueFrom(x);
    this.suppliersTable = y.docs.map(doc => doc.data());

    for(let element of this.suppliersTable)
    {
      this.suppliersUsername.push(element.email)
    }

    x = this.firestore.collection('staffTable', ref =>
    ref.where('email', '!=', '')
    ).get();
    y = await lastValueFrom(x);
    this.staffTable = y.docs.map(doc => doc.data());

    // this.username == "supplier@cs.com"
    // this.suppliersUsername.indexOf(this.username)
    
  }

}
