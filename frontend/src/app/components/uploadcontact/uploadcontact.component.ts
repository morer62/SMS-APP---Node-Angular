import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isThisTypeNode } from 'typescript';
import { ContactsService } from '../../services/contacts.service'
import swal from 'sweetalert';



@Component({
  selector: 'app-uploadcontact',
  templateUrl: './uploadcontact.component.html',
  styleUrls: ['./uploadcontact.component.scss'],
  providers:[ContactsService]
})
export class UploadcontactComponent implements OnInit {

  public arrayMember : any;

  constructor(private _contactService: ContactsService) { 
 
    this.arrayMember ={
      name:'',
      email:'',
      phone:'',
    }
  }

  ngOnInit(): void {

    
  }
  
  createContact() {

    this._contactService.createContact(this.arrayMember).subscribe(
      response => {
        console.log(response.status)
        swal({
          title: "Good job!",
          text: "Contact Created successfully!",
          icon: "success",
        });
      },
      error => {
        console.log(error)
      }

    );
    
  }

}
