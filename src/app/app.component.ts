import { Component, OnInit } from '@angular/core';


declare const particlesJS: any;
const PARTICLES_CONFIG_PATH: string = 'assets/config/particles-config.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{


  ngOnInit(): void {
    // particlesJS.load('particles-js', 'assets/particles.json', function () {
    //   console.log('callback - particles.js config loaded');
    // });
  }

}
