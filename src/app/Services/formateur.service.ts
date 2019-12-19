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
  private formateurSuppUrl = "http://localhost:3000/formateur/supprimerFormateur/";
  private getFormateurUrl = "http://localhost:3000/formateur/getFormateur/";
  private activateAdminUrl = "http://localhost:3000/formateur/activer/";
  private getFormateurTUrl = "http://localhost:3000/formateur/getFormateurT/";
  

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
  formateurSupprimer(email:String) {
    return this.http.delete<any>(this.formateurSuppUrl+email);
  }
  getFormateur(id) {

    return this.http.get<any>(this.getFormateurUrl+id);
  }
  getFormateurT(token) {

    return this.http.get<any>(this.getFormateurTUrl+token);
  }
  activateAdmin(id) {
    return this.http.get<any>(this.activateAdminUrl+id);
  }
  

  //for guards authGuard
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  //for guard admin
  isLoggedAdmin() {
    if (!!localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      const helper = new JwtHelperService();
      const decodedLogin = helper.decodeToken(token);
      console.log("aaa" + !!localStorage.getItem('token'));




      if (token) {

        if (decodedLogin.admin === "active" || decodedLogin.admin === "superadmin" ) {
          return true;
        }

      }
      return false
    }
    else
      return false;
  }

  isLoggedSuperAdmin() {
    if (!!localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      const helper = new JwtHelperService();
      const decodedLogin = helper.decodeToken(token);
      console.log("aaa" + !!localStorage.getItem('token'));




      if (token) {

        if (decodedLogin.admin === "superadmin" ) {
          return true;
        }

      }
      return false
    }
    else
      return false;
  }

  isLoggedFormateur() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log("token"+decodedLogin.admin);

    if (token) {

      if (decodedLogin.admin === "desactive") {
        return true;
      }

    }
    return false
  }
}
