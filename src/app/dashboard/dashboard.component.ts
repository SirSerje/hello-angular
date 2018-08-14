import {Component, OnInit} from '@angular/core';
import {Image} from '../entities/image';
import {HttpClient} from '@angular/common/http';

const SERVER_PORT = 3001;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  images: Image[] = [];

  constructor(private http: HttpClient) {

  }


  // ngOnInit() {
  //   this.http.get('../assets/images.json').subscribe(data => {
  //     this.images = data['images'].map(imageData => new Image(imageData));
  //   });
  // }

  ngOnInit() {
    this.http.get(`http://localhost:${SERVER_PORT}/images`).subscribe(
      data => {
        this.images = data['images'].map(i => new Image(i));
      }
    );
  }

}
