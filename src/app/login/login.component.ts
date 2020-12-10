import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   model: User = {  
     email: '',  
     password: ''
      
   };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


onSubmitMember(){​​​​​​​    if(this.model.email == "piyush@library.com" && this.model.password == "Piyush123@" ||
                        this.model.email == "yash@library.com" && this.model.password == "Yash123@" ||
                        this.model.email == "archit@library.com" && this.model.password == "Archit123@" ||
                        this.model.email == "arsalan@library.com" && this.model.password == "Arsalan123@")    {​​​​​​​      this.router.navigate(['/home'])    }​​​​​​​   
   else{​​​​​​​      alert("Please Enter Valid Details");   
 }​​​​​​​  
}​​​​​​​
onSubmitLibrarian(){​​​​​​​    if(this.model.email == "admin@library.com" && this.model.password == "Admin123@" )    {​​​​​​​      this.router.navigate(['/home'])    }​​​​​​​   
   else{​​​​​​​      alert("Please Enter Valid Details");   
 }​​​​​​​  
}​​​​​​​

  
} 

