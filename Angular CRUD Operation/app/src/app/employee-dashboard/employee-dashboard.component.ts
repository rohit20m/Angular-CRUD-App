import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from '../shared/Models/employee.model';
import { EmployeeService } from '../shared/Services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})

export class EmployeeDashboardComponent implements OnInit {

  employeeForm!: FormGroup;
  employeeData!: any;
  objEmployeeModel: EmployeeModel = new EmployeeModel();
  showAdd: boolean = true;
  showUpdate: boolean = true;
  addEmployee: boolean = true;
  updateEmployee: boolean = true;

  constructor(private formBuilder: FormBuilder, private employee: EmployeeService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      emailID: [''],
      mobileNumber: [''],
      salary: ['']
    })

    this.getAllEmployeeDetails();
  }

  clickAddEmployee() {
    this.employeeForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
    this.addEmployee = true;
    this.updateEmployee = false;
  }

  addEmployeeDetails() {
    this.objEmployeeModel.firstName = this.employeeForm.value.firstName;
    this.objEmployeeModel.lastName = this.employeeForm.value.lastName;
    this.objEmployeeModel.emailID = this.employeeForm.value.emailID;
    this.objEmployeeModel.mobileNumber = this.employeeForm.value.mobileNumber;
    this.objEmployeeModel.salary = this.employeeForm.value.salary;

    this.employee.postEmployee(this.objEmployeeModel).subscribe(res => {
      console.log(res);
      this.toaster.success("Employee Added Successfully");

      let ref = document.getElementById('cancel');
      ref?.click();
      this.employeeForm.reset();
      this.getAllEmployeeDetails();
    },
      error => {
        alert("Something Went Wrong");
      })
  }

  getAllEmployeeDetails() {
    this.employee.getEmployee().subscribe(res => {
      this.employeeData = res;
      console.log(this.employeeData);
    })
  }

  deleteEmployee(row: any) {
    this.employee.deleteEmployee(row.id).subscribe(res => {
      this.toaster.success("Employee Deleted Successfully");
      this.getAllEmployeeDetails();
    })
  }

  showEmployeeDetails(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.addEmployee = false;
    this.updateEmployee = true;
    this.objEmployeeModel.id = row.id;
    this.employeeForm.controls['firstName'].setValue(row.firstName);
    this.employeeForm.controls['lastName'].setValue(row.lastName);
    this.employeeForm.controls['emailID'].setValue(row.emailID);
    this.employeeForm.controls['mobileNumber'].setValue(row.mobileNumber);
    this.employeeForm.controls['salary'].setValue(row.salary);
  }

  updateEmployeeDetails() {
    this.objEmployeeModel.firstName = this.employeeForm.value.firstName;
    this.objEmployeeModel.lastName = this.employeeForm.value.lastName;
    this.objEmployeeModel.emailID = this.employeeForm.value.emailID;
    this.objEmployeeModel.mobileNumber = this.employeeForm.value.mobileNumber;
    this.objEmployeeModel.salary = this.employeeForm.value.salary;

    this.employee.updateEmployee(this.objEmployeeModel, this.objEmployeeModel.id).subscribe(res => {
      this.toaster.success("Employee Updated Successfully");

      let ref = document.getElementById('cancel');
      ref?.click();
      this.employeeForm.reset();
      this.getAllEmployeeDetails();
    })
  }

  logout() {
    localStorage.setItem('isLoggenIn', 'false')
  }
}

