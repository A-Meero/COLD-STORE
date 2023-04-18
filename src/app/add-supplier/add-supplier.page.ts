import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { supplier, FBService, staff } from '../fb.service';


@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.page.html',
  styleUrls: ['./add-supplier.page.scss'],
})
export class AddSupplierPage implements OnInit {


  constructor(public router: Router, public loadingCtrl: LoadingController, public FB:FBService) { }
  newEmail = "";
  newPassword = "";
  conPassword= "";
  supplierName = "";

  newSupplier : supplier = {email:this.newEmail, name:this.supplierName};
  signUp(){



        if(this.newPassword==this.conPassword && this.newPassword.length >= 6){
                  this.newSupplier = {email:this.newEmail, name:this.supplierName};
          this.FB.SignUp(this.newEmail,this.newPassword)
          .then( ()=>{
            this.FB.Msg("Successfull",this.supplierName+ " Can now Login");         
        })
        .catch( ()=>{
          this.FB.Msg("Oppppss"," Something went wrong please try again");
        })
          this.FB.addsupplier(this.newSupplier)
        .then( ()=>{
            this.FB.Msg("Successfull",this.supplierName+ " has been added as a new Supplier");})
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
