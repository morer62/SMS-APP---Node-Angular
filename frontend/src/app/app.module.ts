import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';


// Views
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SendsmsComponent } from './components/sendsms/sendsms.component';
import { PhonecallComponent } from './components/phonecall/phonecall.component';
import { UploadcontactComponent} from './components/uploadcontact/uploadcontact.component';
import { ViewcontactsComponent} from './components/viewcontacts/viewcontacts.component';



// Material
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AlertmsgComponent } from './components/alertmsg/alertmsg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SendsmsComponent,
    PhonecallComponent,
    UploadcontactComponent,
    ViewcontactsComponent,
    LoginComponent,
    //AlertmsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
