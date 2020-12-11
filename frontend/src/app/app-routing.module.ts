import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PhonecallComponent } from './components/phonecall/phonecall.component';
import { SendsmsComponent } from './components/sendsms/sendsms.component';
import { UploadcontactComponent} from './components/uploadcontact/uploadcontact.component';
import { ViewcontactsComponent} from './components/viewcontacts/viewcontacts.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'home',component: HomeComponent },
  {path:'phone-call/:id',component: PhonecallComponent },
  {path:'sms/:id',component: SendsmsComponent },
  {path:'upload-contact',component: UploadcontactComponent },
  {path:'view-contact',component: ViewcontactsComponent },
  {path:'login',component: LoginComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
