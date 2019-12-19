import {
  DefaultMessageResponse,
  DefaultStatusResponseEnum
} from "./../model/default.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";

@Injectable()
export class DefaultHttpService {
  constructor(private http: HttpClient) {}

  private errorHandler(error: HttpErrorResponse, observer: any): void {
    console.log("error", error);
    observer.error(
      new DefaultMessageResponse(
        DefaultStatusResponseEnum.ERROR,
        error.status.toString(),
        error.statusText,
        error.error
      )
    );
    observer.complete();
  }

  private successHandler(
    response: DefaultMessageResponse,
    observer: any
  ): void {
    observer.next(response);
    observer.complete();
  }

  public get(url: string): Observable<DefaultMessageResponse> {
    return new Observable<DefaultMessageResponse>(observer => {
      this.http.get<DefaultMessageResponse>(url).subscribe(
        (response: DefaultMessageResponse) => {
          this.successHandler(response, observer);
        },
        (error: HttpErrorResponse) => {
          this.errorHandler(error, observer);
        }
      );
    });
  }

  public post(url: string, body: any): Observable<DefaultMessageResponse> {
    return new Observable<DefaultMessageResponse>(observer => {
      this.http.post<DefaultMessageResponse>(url, body).subscribe(
        (response: DefaultMessageResponse) => {
          this.successHandler(response, observer);
        },
        (error: HttpErrorResponse) => {
          this.errorHandler(error, observer);
        }
      );
    });
  }
}
