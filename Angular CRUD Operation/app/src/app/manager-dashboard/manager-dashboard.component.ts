import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ManagerService } from '../shared/Services/manager.service';
import { ManagerModel } from '../shared/Models/manager.model';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  managerForm!:FormGroup
  objManagerModel: ManagerModel = new ManagerModel();

  constructor(private formBuilder:FormBuilder, private manager:ManagerService){}

  ngOnInit(): void {
    this.managerForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      emailID:[''],
      mobileNumber:[''],
      salary:['']
    })
  }

  addManagerDetails()
  {
    this.objManagerModel.firstName = this.managerForm.value.firstName;
    this.objManagerModel.lastName = this.managerForm.value.lastName;
    this.objManagerModel.emailID = this.managerForm.value.emailID;
    this.objManagerModel.mobileNumber = this.managerForm.value.mobileNumber;
    this.objManagerModel.salary = this.managerForm.value.salary;

    this.manager.addManager(this.objManagerModel).subscribe((res=>{
      alert("Manager Addded Successfully");
    }))
  }

}
