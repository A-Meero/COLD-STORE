import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { supplier, FBService, staff } from '../fb.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.page.html',
  styleUrls: ['./add-staff.page.scss'],
})
export class AddStaffPage implements OnInit {
  constructor(public router: Router, public loadingCtrl: LoadingController, public FB:FBService) { }
  newEmail = "";
  newPassword = "";
  conPassword= "";
  staffName = "";

  newStaff : staff = {email:this.newEmail, name:this.staffName};

  signUp(){

        this.newStaff = {email:this.newEmail, name:this.staffName};

        if(this.newPassword==this.conPassword && this.newPassword.length >= 6){
          this.FB.SignUp(this.newEmail,this.newPassword)
          .then( ()=>{
            this.FB.Msg("Successfull",this.staffName+ " Can now Login");         
        })
        .catch( ()=>{
          this.FB.Msg("Oppppss"," Something went wrong please try again");
        })
          this.FB.addstaff(this.newStaff)
        .then( ()=>{
            this.FB.Msg("Successfull",this.staffName+ " has been added as a new Staff");})
        .catch( ()=>{
               this.FB.Msg("Oppppss"," Something went wrong please try again");
         })
      }
      else {
        this.FB.Msg("Oppppss"," Something went wrong please try again");
      }
  }

  ngOnInit() {
  }

}
