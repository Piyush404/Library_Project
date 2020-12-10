import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  add: string ="assets/images/add-book.jfif";
  remove: string ="assets/images/remove-book.jfif"
  constructor() { }

  ngOnInit(): void {
  }

}
