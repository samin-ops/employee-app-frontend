import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import { Employee } from './employee.model';
import { catchError, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee! : Employee;

  readonly baseURL = 'http://localhost:3000/api/employees';
  employees!: Employee[];

  constructor( private http: HttpClient) { }


  postEmployee(emp: Employee){ // add employee

   return this.http.post(this.baseURL, emp)
  }

  getEmployeeList():Observable<Employee[]>{// get all employee
    return this.http.get<Employee[]>(this.baseURL).pipe(
      tap((response)=> this.log(response)),
      catchError((err)=>this.handleError(err,[]))
    )



  }

  putEmployee(emp: Employee){// update employee
    return this.http.put(this.baseURL+`/${emp._id}`, emp)
  }

  deleteEmployee(_id: string){ // delete employee
    return this.http.delete(this.baseURL + `/${_id}`)
  }

  private log(response:any){
    return console.table(response)
  }
  private handleError(error: Error, errValue: any){
    console.error(error)
    return of(errValue)
  }


}
