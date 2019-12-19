import { routerMap } from "./../../../assets/url.config";
import {
  DefaultMessageResponse,
  DefaultStatusResponseEnum
} from "./../../model/default.model";
import { LoginModel } from "./../../model/user.model";
import { Router } from "@angular/router";
import { LoginService } from "./../../services/login.service";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  private formModel: any;

  public showAlert = false;
  public shortMessage: string;
  public message: string;

  constructor(
    private fromBuilder: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {
    this.formModel = this.fromBuilder.group(new LoginModel());
  }

  private errorHandler(error: DefaultMessageResponse) {
    (this.shortMessage = error.shortMessage), (this.message = error.message);
    this.showAlert = true;
  }

  public onSubmit(data: LoginModel): void {
    this.showAlert = false;
    this.service.login(data).subscribe(
      (response: DefaultMessageResponse) => {
        if (DefaultStatusResponseEnum.OK === response.status) {
          this.router.navigate([routerMap.home]);
        } else {
          this.errorHandler(response);
        }
      },
      (error: DefaultMessageResponse) => {
        if (error.response.shortMessage) {
          this.errorHandler(error.response);
        } else {
          this.errorHandler(error);
        }
      }
    );
  }

  public onCloseAlertClick(): void {
    this.showAlert = false;
  }
}
