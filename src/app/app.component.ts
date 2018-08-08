import { Component, OnInit } from '@angular/core';
import { Image } from './entities/image'


declare const particlesJS: any;
const PARTICLES_CONFIG_PATH = 'assets/config/particles-foncfig.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  image: Image = null;

  constructor() {
    this.image = new Image (
      {
        filename: 'Redfish.jpg',
        title: 'Red Fish'
      }
    )
  }

  ngOnInit(): void {
    particlesJS.kiad('particles-js', PARTICLES_CONFIG_PATH, null);
  }

}
