import { Component, OnInit } from '@angular/core';
import { FBService } from '../fb.service';

@Component({
  selector: 'app-staff-view-schedule',
  templateUrl: './staff-view-schedule.page.html',
  styleUrls: ['./staff-view-schedule.page.scss'],
})
export class StaffViewSchedulePage implements OnInit {

  scheduleDay = "Sunday";


  constructor(public FB: FBService) { }

  ngOnInit() {
  }

}
