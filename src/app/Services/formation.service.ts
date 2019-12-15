import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Formateur } from '../Models/formateur';
import { Formation } from '../Models/formation';
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private formationAjoutUrl = "http://localhost:3000/formateur/ajouterformation";
  private formationListerUrl = "http://localhost:3000/formateur/ListerFormations";

  private inscriptionListerUrl = "http://localhost:3000/inscription/Lister";
  
  private inscriptionSuppUrl = "http://localhost:3000/inscription/supprimerInscription";
  private formalabeurAjoutUrl = "http://localhost:3000/formalabeur/ajoutFormalabeur";
  private formalabeurConnectionUrl = "http://localhost:3000/formalabeur/connection";
  private formationSupprimerUrl = "http://localhost:3000/formateur/supprimerFormation/";
  private getImageFormatUrl = "http://localhost:3000/formateur/getImageFormateur/";
  private ListerFormationfinisUrl="http://localhost:3000/formateur/Listerformation2/";

  constructor(private http: HttpClient) { }
  
  //ajout
  formationAjout(formation: FormData) {
    
    return this.http.post<any>(this.formationAjoutUrl, formation);
  }

  formationLister() {
    return this.http.get<any>(this.formationListerUrl);
  }
  ListerFormationfinis(){
    return this.http.get<any>(this.ListerFormationfinisUrl);
  }
  formalabeurConnection(formalabeur: User) {
    return this.http.post<any>(this.formalabeurConnectionUrl, formalabeur);
  }
  formalabeurAjout(formalabeur: FormData) {
    return this.http.post<any>(this.formalabeurAjoutUrl, formalabeur);
  }
  formationSupprimer(titre: String) {
    return this.http.delete<any>(this.formationSupprimerUrl+titre);
  }
  getImageFormat(id: number) {
    return this.http.get<any>(this.getImageFormatUrl+id);
  }
 
  inscriptionLister() {
    return this.http.get<any>(this.inscriptionListerUrl);
  }
  inscriptionSupprimer(cin:String) {
    return this.http.delete<any>(this.inscriptionSuppUrl+cin);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isLoggedFormateur() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log("tokrn"+decodedLogin.admin);

    if (token) {

      if (decodedLogin.admin === "desactive") {
        return true;
      }

    }
    return false;
  };
  

  
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
  };

  isLoggeduser() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log("tokrn"+decodedLogin.admin);

    if (token) {

      if (decodedLogin.formalabeur === "active") {
        return true;
      }

    }
    return false;
  };
}
