import { LoginService } from './services/login.service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscaComponent } from './components/busca/busca.component';
import { EmailConfirmComponent } from './components/email-confirm/email-confirm.component';
import { LoginComponent } from './components/login/login.component';
import { DefaultHttpService } from './services/default-http.service';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupCompleteComponent } from './components/signup/signup-complete/signup-complete.component';
import { ProfileSelectComponent } from './components/busca/profile-select/profile-select.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { ProcessComponent } from './components/process/process.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    EmailConfirmComponent,
    LoginComponent,
    EditProfileComponent,
    SignupComponent,
    SignupCompleteComponent,
    ProfileSelectComponent,
    ForgotPasswordComponent,
    ProcessComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClient, FormBuilder, LoginService, DefaultHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
