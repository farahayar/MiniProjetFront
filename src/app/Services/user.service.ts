import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private inscriptionListerUrl = "http://localhost:3000/inscription/Lister";

  private inscriptionSuppUrl = "http://localhost:3000/inscription/supprimerInscription";
  private formalabeurAjoutUrl = "http://localhost:3000/user/ajoutFormalabeur";
  private formalabeurConnectionUrl = "http://localhost:3000/formalabeur/connection";
  private InscriptionFormationUrl = "http://localhost:3000/user/inscriptionformation/";
  private getAllUsersUrl = "http://localhost:3000/user/getAllUsers";

  constructor(private http: HttpClient) { }

  formalabeurConnection(formalabeur: User) {
    return this.http.post<any>(this.formalabeurConnectionUrl, formalabeur);
  }

  inscriptionLister() {
    return this.http.get<any>(this.inscriptionListerUrl);
  }
  formalabeurAjout(formalabeur: FormData) {
    return this.http.post<any>(this.formalabeurAjoutUrl, formalabeur);
  }

  inscriptionSupprimer(cin: String) {
    return this.http.delete<any>(this.inscriptionSuppUrl + cin);
  }

  InscriptionFormation(user:User,id){
    return this.http.post<any>(this.InscriptionFormationUrl+id, user);
  }
  getAllUsers(){
    //console.log("ttt"+titre);
    
    return this.http.get<any>(this.getAllUsersUrl);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }


  isLoggedAdmin() {
    if (!!localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      const helper = new JwtHelperService();
      const decodedLogin = helper.decodeToken(token);
      console.log("aaa" + !!localStorage.getItem('token'));




      if (token) {

        if (decodedLogin.admin === "active") {
          return true;
        }

      }
      return false
    }
    else
      return false;
  }
}
