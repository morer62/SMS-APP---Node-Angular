import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service'
import swal from 'sweetalert';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.scss'],
  providers:[ContactsService]
})
export class ViewcontactsComponent implements OnInit {

  public arrayMember : any;
  public arrayDelete :any;

  constructor(private _contactService: ContactsService) { }

  ngOnInit(): void {
    this.viewAllContacts()
  }

  viewAllContacts() {

    this._contactService.getAllContacts().subscribe(
        response=>{
         this.arrayMember =  response.body;
         console.log(this.arrayMember);
        }
    );
  }

  deleteContact(idcontacts){
    
    this._contactService.deleteContact(idcontacts).subscribe(
      response=>{
        swal({
          title: "Good job!",
          text: "Client Deleted successfully!",
          icon: "success",
        })
        .then(()=>{
          //this.router.navigate('[/]');
          window.location.replace ("/view-contact");
        });

        

        
       }
    )
  }

}
