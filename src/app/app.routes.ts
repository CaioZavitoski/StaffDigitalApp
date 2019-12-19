import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { BuscaComponent } from './components/busca/busca.component';
import { LoginComponent } from "./components/login/login.component";
import { EmailConfirmComponent } from "./components/email-confirm/email-confirm.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "email-confirm", component: EmailConfirmComponent },
  { path: "login", component: EmailConfirmComponent },
  { path: "busca", component: BuscaComponent },
  { path: "editprofile", component: EditProfileComponent }
];
