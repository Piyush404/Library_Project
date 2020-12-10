import { Component, OnInit } from '@angular/core';
import {Users} from '../UserBook/users';
import{RestService} from '../services/rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  users : Users[];
  searchBooks: string;
   p: number = 1;
 

  constructor(public rs:RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users = response;
    })
  }

  
}
