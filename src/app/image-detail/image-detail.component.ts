import {Component, OnInit} from '@angular/core';
import {Image} from "../entities/image";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image: Image;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.get(`../assets/image${+params.id}.json`)
        .subscribe(data => {
        this.image = new Image(data);
      })

    })
  }

}
