import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AjoutFormateurComponent } from './components/formateur/ajout-formateur/ajout-formateur.component';
import { ListerFormateurComponent } from './components/formateur/lister-formateur/lister-formateur.component';
import { ModifierFormateurComponent } from './components/formateur/modifier-formateur/modifier-formateur.component';
import { AjoutAdminComponent } from './components/admin/ajout-admin/ajout-admin.component';
import { ListerAdminComponent } from './components/admin/lister-admin/lister-admin.component';
import { AjoutFormationComponent } from './components/formation/ajout-formation/ajout-formation.component';
import { ListerFormationComponent } from './components/formation/lister-formation/lister-formation.component';
import { ModifierFormationComponent } from './components/formation/modifier-formation/modifier-formation.component';
import { ConsulterFormationComponent } from './components/formation/consulter-formation/consulter-formation.component';
import { ConsulterFormateurComponent } from './components/formateur/consulter-formateur/consulter-formateur.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormateurService } from './Services/formateur.service';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './Guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AjoutFormateurComponent,
    ListerFormateurComponent,
    ModifierFormateurComponent,
    AjoutAdminComponent,
    ListerAdminComponent,
    AjoutFormationComponent,
    ListerFormationComponent,
    ModifierFormationComponent,
    ConsulterFormationComponent,
    ConsulterFormateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    FormateurService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
