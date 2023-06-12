import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';


const employeeRoutes: Routes = [
    {path:'employee', component: EmployeeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(employeeRoutes)
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeesModule { }
