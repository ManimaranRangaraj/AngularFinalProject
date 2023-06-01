import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Department } from 'src/app/department';
import { departmentNameUnique } from 'src/app/shared/department.validators';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {

  constructor(private apiService: ApiserviceService, private fb:FormBuilder) { }
  @Input() depart: Department = {
    departmentId : 0,
    departmentName: ""
  };
  departmentId = 0;
  departmentName = "";
  DepartmentForm = this.fb.group({
    departmentName : ['']
  });
  formValid: boolean = true;
  

  ngOnInit(): void {
    this.departmentId = this.depart.departmentId;
    this.departmentName = this.depart.departmentName;
    this.DepartmentForm = this.fb.group({
      departmentName : [this.depart.departmentName,Validators.required]
    });
  }

  get departName(): any{
    return this.DepartmentForm?.get('departmentName');
  }

  addDepartment() {
    if(!this.DepartmentForm.invalid){
      this.formValid = true;
      var dept : Department = {
        departmentId: this.departmentId,
        departmentName: this.departmentName
      };
      this.apiService.addDepartment(dept).subscribe(res => {
        alert(res.toString());
      });
    }
    else{
      this.formValid = false;
    }
  }

  updateDepartment() {
    if(!this.DepartmentForm.invalid){
      this.formValid = true;
      var dept : Department = {
        departmentId: this.departmentId,
        departmentName: this.departmentName
      };
      this.apiService.updateDepartment(dept).subscribe(res => {
        alert(res.toString());
      });
    }
    else{
      this.formValid = false;
    }
  }

}
