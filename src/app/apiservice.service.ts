import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './department';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly apiUrl = 'https://localhost:7160/api/';

  constructor(private http: HttpClient) { }

    getDepartmentList(): Observable<Department[]> {
      return this.http.get<Department[]>(this.apiUrl + 'Department/GetDepartment');
    }

    addDepartment(dept: Department): Observable<Department> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<Department>(this.apiUrl + 'Department/AddDepartment/', dept, httpOptions);
    }

    updateDepartment(dept: Department): Observable<Department> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.put<Department>(this.apiUrl + 'Department/UpdateDepartment/', dept, httpOptions);
    }

    deleteDepartment(deptId: number): Observable<number> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.delete<number>(this.apiUrl + 'Department/DeleteDepartment/' + deptId, httpOptions);
    }

    getStudentList(): Observable<Student[]> {
      return this.http.get<Student[]>(this.apiUrl + 'Student/GetStudent');
    }

    addStudent(stud: Student): Observable<Student> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<Student>(this.apiUrl + 'Student/AddStudent/', stud, httpOptions);
    }

    updateStudent(stud: Student): Observable<Student> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.put<Student>(this.apiUrl + 'Student/UpdateStudent/', stud, httpOptions);
    }

    deleteStudent(studId: number): Observable<number> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.delete<number>(this.apiUrl + 'Student/DeleteStudent/' + studId, httpOptions);
    }
}
