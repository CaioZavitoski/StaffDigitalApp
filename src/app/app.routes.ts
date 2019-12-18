import { LoginComponent } from './login/login.component';
import { EmailConfirmComponent } from './email-confirm/email-confirm.component';
import { BuscaComponent } from './busca/busca.component';
import { Routes } from '@angular/router'

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'email-confirm', component: EmailConfirmComponent},
    {path: 'login', component: EmailConfirmComponent},

]

