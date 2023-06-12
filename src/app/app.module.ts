import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesModule } from './employees/employees.module';
import localeDECH from '@angular/common/locales/de-CH';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';


registerLocaleData(localeDECH);




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EmployeesModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de-ch' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
