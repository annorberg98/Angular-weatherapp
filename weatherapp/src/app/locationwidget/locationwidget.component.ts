import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { HttpService } from '../services/weather/http.service';

@Component({
  selector: 'app-locationwidget',
  templateUrl: './locationwidget.component.html',
  styleUrls: ['./locationwidget.component.css']
})
export class LocationwidgetComponent implements OnInit {
  public location: Object = {};
  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords);
      })
    }
  }

}
