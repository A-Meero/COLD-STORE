import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id=-1;
  constructor(public data:DataListService, private activatedRoute:ActivatedRoute) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')); 
   }

  ngOnInit() {
  }

}
