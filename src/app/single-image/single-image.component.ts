import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../entities/image';
@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.css']
})
export class SingleImageComponent implements OnInit {

  @Input() image: Image = null;

  constructor() { }

  ngOnInit() {

  }

}
