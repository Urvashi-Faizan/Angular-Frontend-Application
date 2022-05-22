import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

const routes: Routes = [
  {
    path:'signup',component:SignupComponent

  },
  {
    path:'signin',component:UserSigninComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
