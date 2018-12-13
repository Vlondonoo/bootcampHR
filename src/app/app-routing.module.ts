import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AppGuard } from './app.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'employees', component: EmployeesComponent, canActivate:[AppGuard]},
  {path:'project', component: ProjectsComponent, canActivate:[AppGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  {path:'', redirectTo: 'login',pathMatch:'full'},
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppGuard]
})
export class AppRoutingModule { }
