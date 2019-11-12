import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateur } from '../Models/formateur'
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private formateurConnectionUrl = "http://localhost:3000/formateur/connection";
  private formateurListerUrl = "http://localhost:3000/formateur/Lister";
  private formateurinscriptioUrl = "http://localhost:3000/formateur/inscriptiopn";
  private formateurAjoutUrl = "http://localhost:3000/formateur/ajoutFormateur";

  constructor(private http: HttpClient) { }
  //connection  
  formateurConnection(formateur: Formateur) {
    return this.http.post<any>(this.formateurConnectionUrl, formateur);
  }
  //Liste des formateurs
  formateurLister() {
    return this.http.get<any>(this.formateurListerUrl);
  }
  //ajout
  formateurAjout(formateur: FormData) {
    return this.http.post<any>(this.formateurAjoutUrl, formateur);
  }
  //inscription
  formateurIncription(formateur: Formateur) {
    return this.http.post<any>(this.formateurinscriptioUrl, formateur);
  }

  //for guards authGuard
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  //for guard admin
  isLoggedAdmin() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log("tokrn"+decodedLogin.admin);

    if (token) {

      if (decodedLogin.admin === "active") {
        return true;
      }

    }
    return false
  }
}
