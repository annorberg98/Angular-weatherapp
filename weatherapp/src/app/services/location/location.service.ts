import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public locationData = {
    "location": {},
    "time": {}
  };
  constructor() { }
  getLocation() {
    let today = Date.now();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.locationData.location = position.coords;
        console.log(position.coords);
        this.locationData.time = Date.now();
      })
    }
  }
}
