import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router, private toaster: ToastrService){}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName:['',Validators.required],
      mobileNumber:['',Validators.required],
      emailID:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signUp()
  {
    this.http.post<any>("http://localhost:3000/comments", this.signUpForm.value).subscribe(res=>{
      // alert("Signed Up Successfully");
      this.toaster.success("Signed Up Successfully");
      this.signUpForm.reset();
      this.router.navigate(['login']);
    },
    err=>{
      // alert("Something Went Wrong");
      this.toaster.error("Something Went Wrong");
    })
  }
}
