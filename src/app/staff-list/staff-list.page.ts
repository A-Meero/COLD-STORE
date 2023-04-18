import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FBService } from '../fb.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.page.html',
  styleUrls: ['./staff-list.page.scss'],
})
export class StaffListPage implements OnInit {

  constructor(public FB:FBService, public alertCtrl: AlertController) { }

  DeleteItem(id:any){
    this.FB.deleteStaff(id);
  }

  async showitemAlert(member: any)
  {
    let alert = await   this.alertCtrl.create({
      header: 'Staff Details',
      message: '<br> Name: ' + member.name +
                '<br> Age: '  + member.email,
      buttons: ['OK']
    });
    alert.present();
  }

  ngOnInit() {
  }

}
