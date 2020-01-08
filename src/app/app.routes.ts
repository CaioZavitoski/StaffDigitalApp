import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { ProfileSelectComponent } from './components/busca/profile-select/profile-select.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { BuscaComponent } from './components/busca/busca.component';
import { LoginComponent } from './components/login/login.component';
import { EmailConfirmComponent } from './components/email-confirm/email-confirm.component';
import { Routes } from '@angular/router';
import { SignupCompleteComponent } from './components/signup/signup-complete/signup-complete.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'email-confirm', component: EmailConfirmComponent },
  { path: 'login', component: EmailConfirmComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-complete', component: SignupCompleteComponent },
  { path: 'profile-select', component: ProfileSelectComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
];
