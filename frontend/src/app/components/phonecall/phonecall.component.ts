import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ContactsService } from '../../services/contacts.service'
import { SmsService} from '../../services/sms.service'
import swal from 'sweetalert';

@Component({
  selector: 'app-phonecall',
  templateUrl: './phonecall.component.html',
  styleUrls: ['./phonecall.component.scss'],
  providers: [SmsService]
})
export class PhonecallComponent implements OnInit {

  public member : any;

  constructor(private _contactService: ContactsService, private _sendsmsService: SmsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idUser =  this.route.snapshot.params.id;

    this._contactService.getOneContacts(idUser).subscribe(
      response=>{
       this.member =  response.body;
       console.log(this.member);
      }
    );
  }

  testingCall(number){

    swal({
      title: "Are you ready ?",
      text: "Please, answer your phone",
      icon: "success",
    })
    
    this._sendsmsService.testCall(number).subscribe(
      response => {console.log(response)},
      error => {console.log(error)}

    );
  }

  

}
