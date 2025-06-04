import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'frontend';

  ngOnInit(): void {
    AOS.init({
      duration: 2000, // animation duration
      once: true,     // whether animation should happen only once
      
    });
  }
 
}

