import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor(private apiService: ApiserviceService){}

  StudentList: Student[] = [];
  ModalTitle = "";
  ActivateAddEditStudComp: boolean = false;
  stud: Student = {
    studentId: 0,
    studentName: "",
    course: "",
    specialization: "",
    percentage: "",
    departmentId: 0
  };
  loadingSpin: boolean = true;

  ngOnInit(): void {
    this.refreshStudList();
  }

  addClick() {
    this.stud = {
      studentId : 0,
      studentName : "",
      course : "",
      specialization : "",
      percentage : "",
      departmentId : 0,
    }
    this.ModalTitle = "Add Student";
    this.ActivateAddEditStudComp = true;
  }

  editClick(item: Student) {
    this.stud = item;
    this.ModalTitle = "Edit Student";
    this.ActivateAddEditStudComp = true;
  }

  deleteClick(item: Student) {
    if (confirm('Are you sure??')) {
      this.apiService.deleteStudent(item.studentId).subscribe(data => {
        alert(data.toString());
        this.refreshStudList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditStudComp = false;
    this.refreshStudList();
  }

  refreshStudList() {
    this.loadingSpin = true;
    this.apiService.getStudentList().subscribe(data => {
      this.StudentList = data;
      this.loadingSpin = false;
    });
  }

}
