import { url } from "./../../assets/url.config";
import { Observable } from "rxjs";
import { DefaultHttpService } from "./default-http.service";
import { DefaultMessageResponse } from "./../model/default.model";
import { LoginModel } from "./../model/user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
  constructor(private service: DefaultHttpService) {}

  login(data: LoginModel): Observable<DefaultMessageResponse> {
    return this.service.post(url.login, data);
  }
}
