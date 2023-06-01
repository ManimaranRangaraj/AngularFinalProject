import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Department } from 'src/app/department';
import { Student } from 'src/app/student';
import { FormBuilder, Validators } from '@angular/forms';
import { percentageLimit, department } from 'src/app/shared/student.validators';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private apiService: ApiserviceService, private fb: FormBuilder){}

  @Input() stud: Student = {
    studentId: 0,
    studentName: "",
    course: "",
    specialization: "",
    percentage: "",
    departmentId: 0
  };
  studentId = 0;
  studentName = "";
  course = "";
  specialization = "";
  percentage = "";
  departmentId = 0;
  DepartmentList: Department[] = [];
  StudentForm = this.fb.group({
    studentId: [this.stud.studentId],
    studentName: [''],
    course: [''],
    specialization: [''],
    percentage: [''],
    departmentId: ['']
  });
  formValid: boolean = true;


  ngOnInit(): void {
    this.loadStudentList();
    this.StudentForm = this.fb.group({
      studentId: [this.stud.studentId,Validators.required],
      studentName: ['',Validators.required],
      course: ['',Validators.required],
      specialization: ['',Validators.required],
      percentage: ['',[Validators.required,Validators.pattern('^[0-9]*$'),percentageLimit]],
      departmentId: ['',[Validators.required,department]]
    });
  }

  loadStudentList() {

    this.apiService.getDepartmentList().subscribe((data: Department[]) => {
      this.DepartmentList = data;

      this.studentId = this.stud.studentId;
      this.studentName = this.stud.studentName;
      this.course = this.stud.course;
      this.specialization = this.stud.specialization;
      this.percentage = this.stud.percentage;
      this.departmentId = this.stud.departmentId;
    });
  }

  
  get studName(): any{
    return this.StudentForm?.get('studentName');
  }
  
  get studCourse(): any{
    return this.StudentForm?.get('course');
  }
  
  get studSpec(): any{
    return this.StudentForm?.get('specialization');
  }
  
  get studPer(): any{
    return this.StudentForm?.get('percentage');
  }
  
  get studDeptId(): any{
    return this.StudentForm?.get('departmentId');
  }

  addStudent() {
    if(this.StudentForm.valid){
      this.formValid = true;
      var val : Student = {
        studentId: this.studentId,
        studentName: this.studentName,
        course: this.course,
        specialization: this.specialization,
        percentage: this.percentage,
        departmentId: this.departmentId
      };
  
      this.apiService.addStudent(val).subscribe(res => {
        alert(res.toString());
      });
    }
    else{
      this.formValid = false;
    }
  }

  updateStudent() {
    if(this.StudentForm.valid){
      this.formValid = true;      
      var val : Student = {
        studentId: this.studentId,
        studentName: this.studentName,
        course: this.course,
        specialization: this.specialization,
        percentage: this.percentage,
        departmentId: Number(this.departmentId)
      };

      this.apiService.updateStudent(val).subscribe(res => {
        alert(res.toString());
      });
    }
    else{
      this.formValid = false;
    }
  }

}
