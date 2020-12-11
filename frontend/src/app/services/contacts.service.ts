import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private _http:HttpClient) { }

  createContact(arrayMember):Observable<any>{
    let params = JSON.stringify(arrayMember);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post('http://localhost:4000/create-contact', params,{headers:headers} );
  }

  getAllContacts():Observable<any>{ 
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get('http://localhost:4000/view-all-contacts',{headers:headers} );
  }

  deleteContact(id):Observable<any>{ 
    return this._http.delete(`http://localhost:4000/delete-contact/${id}`, );
  }

  getOneContacts(id):Observable<any>{
    return this._http.get(`http://localhost:4000/view-contact/${id}`, );
  }
}
