import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private tempLat: string = '55.599017599999996';
  private tempLong: string = '13.001438199999999';

  private apiKey: string = "3c0b17845bd0631ba85f5076da71f691";
  // URL format: api.openweathermap.org/data/2.5/weather?APPID={apikey}&lat={latitude}&lon={longitude}
  private apiUrl: string = "https://api.openweathermap.org/data/2.5/weather";

  public rawData = {
    "coord": { "lon": 13, "lat": 55.6 },
    "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }],
    "base": "stations",
    "main": { "temp": 292.81, "pressure": 1008, "humidity": 82, "temp_min": 290.15, "temp_max": 294.82 },
    "visibility": 10000,
    "wind": { "speed": 4.1, "deg": 30 },
    "clouds": { "all": 75 },
    "dt": 1558352646,
    "sys": { "type": 1, "id": 1575, "message": 0.0074, "country": "SE", "sunrise": 1558320566, "sunset": 1558379991 },
    "id": 2712995,
    "name": "Gamla Staden",
    "cod": 200
  };

  constructor(private http: HttpClient) {
    //this.getConfig();
  }

  public getWeatherData(coords: Object) {
    /*let lat = coords.latitude;
    let long = coords.latitude;*/
    let params = new HttpParams().set('APPID', this.apiKey).set('lat', this.tempLat).set('lon', this.tempLong);

    this.http.get(this.apiUrl, { params }).subscribe(data => console.log(data));
  }

  configUrl = "assets/config.json";

  getConfig() {
    return this.http.get(this.configUrl).subscribe(data => {
      this.apiKey = data['apiKey'];
      this.apiUrl = data['weatherUrl'];
    });
  }
}
