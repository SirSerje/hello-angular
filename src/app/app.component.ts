import { Component, OnInit } from '@angular/core';
import { Image } from './entities/image'


declare const particlesJS: any;
const PARTICLES_CONFIG_PATH: string = 'assets/config/particles-config.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  images: Image[] = [];

  constructor() {
    this.images = [
      new Image ({filename: 'Redfish.jpg',title: 'Red Fish'}),
      new Image ({filename: 'Redfish.jpg',title: 'Red Fish'}),
      ]
  }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }

}
