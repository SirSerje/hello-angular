import {Component, OnInit} from '@angular/core';
import {Image} from '../entities/image'


export const IMAGES_MOCK = [
  new Image({filename: 'redfish.png', title: 'Red Fish', id: 0}),
  new Image({filename: 'longfish.png', title: 'Long Fish', id: 1}),
  new Image({filename: 'rightfish.png', title: 'Right Fish', id: 2}),
  new Image({filename: 'goldfish.png', title: 'Gold Fish', id: 3}),
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  images: Image[] = [];

  constructor() {
    this.images = []
  }

  ngOnInit() {
    // FIXME: not sure, about how correct is this
    this.images = IMAGES_MOCK
  }

}
