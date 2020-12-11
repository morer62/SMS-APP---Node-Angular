import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SMS } from 'src/app/models/sms'; 

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(
    private _http:HttpClient
  ) { }

  holaMundo(){
    return "Hola desde servicio";
  }

  sendSMS(MySms):Observable<any>{
    let params = JSON.stringify(MySms);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post('http://localhost:4000/send-sms', params,{headers:headers} );
  }
   
  testCall(phone):Observable<any>{
    return this._http.get(`http://localhost:4000/test-call/${phone}`, );
  }

}
