import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TopoComponent } from "./topo/topo.component";
import { BuscaComponent } from "./busca/busca.component";
import { EmailConfirmComponent } from './email-confirm/email-confirm.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, TopoComponent, BuscaComponent, EmailConfirmComponent, LoginComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
