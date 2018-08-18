import {Component, OnInit} from '@angular/core';
import {Image} from '../entities/image';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

interface IIMageResponse {
  image: Image;
}

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
      // FIXME: make dynamic
      this.http.get(`http://localhost:3001/image/${+params.id}`)
        .subscribe((data: IIMageResponse) => {
        this.image = new Image(data.image);
      });
    });
  }
}
