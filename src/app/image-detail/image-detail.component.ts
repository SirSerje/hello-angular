import {Component, OnInit} from '@angular/core';
import {Image} from "../entities/image";
import {ActivatedRoute, Router} from "@angular/router";
import {IMAGES_MOCK} from '../dashboard/dashboard.component'

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image: Image;


  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params .subscribe(params => {
      this.image = IMAGES_MOCK.find(image => image.id === +params.id)
    })
  }

}
