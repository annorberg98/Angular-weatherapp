import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onHover();
  }

  onHover = function () {
    var button = document.getElementById("submit");
    var row = document.getElementsByClassName("row").onMouseHover = function () { onMouseHover() };




    console.log(row);
  }

}
