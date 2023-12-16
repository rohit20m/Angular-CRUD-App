import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm!:FormGroup;
  public loading = false;
  // public invalidUser = false;
  hidePassword = true; // Initially, hide the password



  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router, private toaster: ToastrService){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailID:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.loading = true;
    // this.invalidUser = false; // Reset the flag
    this.http.get<any>("http://localhost:3000/comments").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.emailID === this.loginForm.value.emailID && a.password === this.loginForm.value.password 
      });
      if(user)
      {
        this.toaster.success("User Logged In successfully!!")
        this.loginForm.reset();
        localStorage.setItem('isLoggenIn','true');
        this.router.navigate(['employeeDashboard']);
      }
      else
      {
        // this.invalidUser = true;
        this.toaster.info("Invalid User");
        this.loginForm.reset();
      }
      this.loading = false;
    },err=>{
      // alert("Something Went Wrong");
      this.toaster.error("Something Went Wrong");
      this.loading = false;
    })
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
