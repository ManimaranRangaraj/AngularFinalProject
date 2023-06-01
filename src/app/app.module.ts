import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { HeadmenuComponent } from './headmenu/headmenu.component';
import { StudentComponent } from './student/student.component';
import { ShowDepartmentComponent } from './department/show-department/show-department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { ShowStudentComponent } from './student/show-student/show-student.component';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';
import { ApiserviceService } from './apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    HeadmenuComponent,
    StudentComponent,
    ShowDepartmentComponent,
    AddEditDepartmentComponent,
    ShowStudentComponent,
    AddEditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
