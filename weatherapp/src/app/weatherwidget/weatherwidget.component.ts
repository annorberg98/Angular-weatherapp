import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/weather/http.service';
import { LocationService } from '../services/location/location.service';

@Component({
  selector: 'app-weatherwidget',
  templateUrl: './weatherwidget.component.html',
  styleUrls: ['./weatherwidget.component.css']
})
export class WeatherwidgetComponent implements OnInit {
  constructor(private httpservice: HttpService, private locationservice: LocationService) {
    this.getWeather();
  }
  private tempLat: string = '55.599017599999996';
  private tempLong: string = '13.001438199999999';
  public rawWeatherData;

  public data = {
    "weather": [],
    "coords": {},
    "main": {},
    "wind": {},
    "icon": "",
  }
  public icon: string;

  //private coordinates: Object = this.locationservice.location;

  public getWeather() {
    //this.httpservice.getWeatherData(coordinates);
    this.rawWeatherData = this.httpservice.rawData;
    this.rawWeatherData.main.temp = this.KelvinToCelsius(this.rawWeatherData.main.temp);

    this.data.weather = this.rawWeatherData.weather;
    this.data.coords = this.rawWeatherData.coords;
    this.data.main = this.rawWeatherData.main;
    this.data.wind = this.rawWeatherData.wind;
    this.data.icon = this.rawWeatherData.weather[0].icon;

  }

  ngOnInit() {
  }

  KelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }
}
