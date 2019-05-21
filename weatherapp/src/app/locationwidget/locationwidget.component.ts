import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { HttpService } from '../services/weather/http.service';
import { LocationService } from '../services/location/location.service';

@Component({
  selector: 'app-locationwidget',
  templateUrl: './locationwidget.component.html',
  styleUrls: ['./locationwidget.component.css']
})
export class LocationwidgetComponent implements OnInit {
  constructor(private http: HttpService, private locationservice: LocationService) {

  }

  ngOnInit() {
    this.locationservice.getLocation();
  }



}