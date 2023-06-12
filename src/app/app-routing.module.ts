import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const configRoutes: Routes = [
  {path:'', redirectTo:"register",pathMatch:"full"},
  {path:'register', component: RegisterComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(configRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
