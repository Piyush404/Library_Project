import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { RestService } from '../services/rest.service';

import { Users } from '../UserBook/users';
import { Location } from '@angular/common';



@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.scss']
})
export class RemoveBookComponent implements OnInit {

  temp: any = {};

  form: NgForm;

  user = Users;
 

  constructor(private rs: RestService, private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  
  RemoveBook(id : string){​​

    this.rs.RemoveBook(id)

    .subscribe( (rs) => 

    {​​

      console.log(rs);

      this.rs.getUsers();

    }​​, (error) => {​​

      console.log(error);

    }​​)



    alert("Book Successfully Removed");

     this.router.navigate(['/rest'])

      



  }​​
}​​



