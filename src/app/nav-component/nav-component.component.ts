import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {

  libraray: string ="assets/images/img2.jfif";
  constructor() { }

  ngOnInit(): void {
  }

}
