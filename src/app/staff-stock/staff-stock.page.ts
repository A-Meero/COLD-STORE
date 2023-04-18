import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FBService, item } from '../fb.service';

@Component({
  selector: 'app-staff-stock',
  templateUrl: './staff-stock.page.html',
  styleUrls: ['./staff-stock.page.scss'],
})
export class StaffStockPage implements OnInit {

  constructor(public FB:FBService, public alertCtrl: AlertController,public router: Router) { }

  supplier:any;
  category:any;
  selling:any;
  stock!:number;




  async showitemAlert(item: any)
  {
    let alert = await   this.alertCtrl.create({
      header: 'Item Details',
      message:  '<br> Name: ' + item.name+
                '<br> Category: '  + item.category+
                '<br> Selling: '+ item.moving+
                '<br> Unit Price : '  + item.price+' BD'+
                '<br> Units/Box: '+ item.quantityPerBox+
                '<br> Supplier: '+ item.supplier+
                '<br> Stock: '+ item.stock+
                '<br> Threshhold: '+ item.threshhold ,
      buttons: ['OK']
    });
    alert.present();
  }
  ngOnInit() {
  }
}
