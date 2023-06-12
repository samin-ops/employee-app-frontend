import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ EmployeeComponent ]
})
export class EmployeeComponent implements OnInit {


  constructor(
    public employeeService: EmployeeService
    ) { }

   employees! : Employee[]

  ngOnInit(){
    this.resetForm();
    this.refreeshEmployeeList();
    this.onGetEmployeeList()
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
    }
    this.employeeService.selectedEmployee =
    {
      _id:"",
      name:"",
      position: "",
      office:"",
      salary:0
    }
  }

  onSubmit(form: NgForm){
    if(form.value._id==""){// we can do insert operation
      this.employeeService.postEmployee(form.value).subscribe((_res)=>{
        this.resetForm(form);
        this.refreeshEmployeeList();
      });
    }
    else{// we can do update operation
      this.employeeService.putEmployee(form.value).subscribe((_res)=>{
        this.resetForm(form);
        this.refreeshEmployeeList();
      });
    }
  }

  refreeshEmployeeList(){
   this.employeeService.getEmployeeList().subscribe((res)=>{
    this.employeeService.employees = res //as Employee[]
   })
  }

  onEdit(emp: Employee){
    if(confirm("Are you sure to edit ?")){
      this.employeeService.selectedEmployee = emp;
    }
  }

  onDelete(_id: string, form: NgForm){
    if(confirm("Are you sure to delete ?")){
      this.employeeService.deleteEmployee(_id).subscribe(()=>{
        this.refreeshEmployeeList();
        this.resetForm(form);
      })
    }

  }

  onGetEmployeeList(){
    this.employeeService.getEmployeeList().subscribe({
      next:(data)=>{
        this.employees = data
      }
    })

  }

}
