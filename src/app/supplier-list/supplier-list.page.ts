import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FBService } from '../fb.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.page.html',
  styleUrls: ['./supplier-list.page.scss'],
})
export class SupplierListPage implements OnInit {

  constructor(public FB:FBService, public alertCtrl: AlertController) { }



  DeleteItem(id:any){
    this.FB.deleteStaff(id);
  }

  async showitemAlert(member: any)
  {
    let alert = await   this.alertCtrl.create({
      header: 'Supplier Details',
      message: '<br> Name: ' + member.name +
                '<br> Email: '  + member.email,
      buttons: ['OK']
    });
    alert.present();
  }

  ngOnInit() {
  }

}
