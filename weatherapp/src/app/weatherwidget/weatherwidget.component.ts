import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-weatherwidget',
  templateUrl: './weatherwidget.component.html',
  styleUrls: ['./weatherwidget.component.css']
})
export class WeatherwidgetComponent implements OnInit {
  constructor(private httpservice: HttpService) {
    this.getWeather();
  }
  private tempLat: string = '55.599017599999996';
  private tempLong: string = '13.001438199999999';
  public rawWeatherData;

  public data;

  public getWeather() {
    //this.httpservice.getWeatherData();
    this.rawWeatherData = this.httpservice.rawData;
  }

  ngOnInit() {
  }

}
