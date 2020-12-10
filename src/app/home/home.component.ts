import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home: string = "assets/images/college_library_map.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
