import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FBService, schedule } from '../fb.service';

@Component({
  selector: 'app-owner-view-schedule',
  templateUrl: './owner-view-schedule.page.html',
  styleUrls: ['./owner-view-schedule.page.scss'],
})
export class OwnerViewSchedulePage implements OnInit {

  scheduleDay = "Sunday";
  sundayHidden = false;
  mondayHidden = false;
  tuesdayHidden = false;
  wednesdayHidden = false;
  thursdayHidden = false;
  fridayHidden = false;
  saturdayHidden = false;
  
  selectedShift: any;
  employeeUpdate = "Shift Free";

  constructor(public firestore: AngularFirestore, public FB: FBService, public loadingCtrl: LoadingController, public router: Router) { }
  
  ngOnInit() {
  }

  sundayChange(shift: any)
  {
    this.sundayHidden = true;
    this.selectedShift = shift;
  }

  mondayChange(shift: any)
  {
    this.mondayHidden = true;
    this.selectedShift = shift;
  }
  
  tuesdayChange(shift: any)
  {
    this.tuesdayHidden = true;
    this.selectedShift = shift;
  }

  wednesdayChange(shift: any)
  {
    this.wednesdayHidden = true;
    this.selectedShift = shift;
  }

  thursdayChange(shift: any)
  {
    this.thursdayHidden = true;
    this.selectedShift = shift;
  }

  fridayChange(shift: any)
  {
    this.fridayHidden = true;
    this.selectedShift = shift;
  }

  saturdayChange(shift: any)
  {
    this.saturdayHidden = true;
    this.selectedShift = shift;
  }

  async updateSchedule(selectedShift: any, employeeUpdate: string)
  {
    this.FB.updateScheduleEmployee(selectedShift, employeeUpdate);

    const loader = await this.loadingCtrl.create({
      message: "Updating Schedule...",
      duration: 700,
      
      
    });
    loader.present();
    this.router.navigateByUrl('/owner-view')
  }

  // ionViewWillLeave() {
  //   window.location.reload();
  // }
}
