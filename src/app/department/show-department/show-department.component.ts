import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Department } from 'src/app/department';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  DepartmentList: Department[] = [];
  ModalTitle = "";
  ActivateAddEditDepartComp: boolean = false;
  depart: Department = {
    departmentId : 0,
    departmentName : ""
  };
  loadingSpin: boolean = true;
  dataLength : boolean = true;

  constructor(private apiService: ApiserviceService){}

  ngOnInit(): void {
    this.loadingSpin = true;
    this.refreshDepList();
  }

  addClick() {
    this.depart = {
      departmentId: 0,
      departmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepartComp = true;
  }

  editClick(item: Department) {
    this.depart = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepartComp = true;
  }

  deleteClick(item: Department) {
    if (confirm('Are you sure??')) {
      this.apiService.deleteDepartment(item.departmentId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditDepartComp = false;
    this.refreshDepList();
  }

  refreshDepList() {
    this.apiService.getDepartmentList().subscribe(data => {
      this.DepartmentList = data;
      this.loadingSpin = false;
    });
  }

}
