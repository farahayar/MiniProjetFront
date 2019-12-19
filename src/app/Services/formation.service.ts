import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Formateur } from '../Models/formateur';
import { Formation } from '../Models/formation';
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private formationAjoutUrl = "http://localhost:3000/formateur/ajouterformation";
  private formationListerUrl = "http://localhost:3000/formateur/ListerFormations2";

  private inscriptionListerUrl = "http://localhost:3000/inscription/Lister";

  private inscriptionSuppUrl = "http://localhost:3000/inscription/supprimerInscription";
  private formalabeurAjoutUrl = "http://localhost:3000/formalabeur/ajoutFormalabeur";
  private formalabeurConnectionUrl = "http://localhost:3000/formalabeur/connection";
  private formationSupprimerUrl = "http://localhost:3000/formateur/supprimerFormation/";
  private getImageFormatUrl = "http://localhost:3000/formateur/getImageFormateur/";
  private getFormationUrl = "http://localhost:3000/formateur/getFormation/";
  private formationListerFormateurUrl = "http://localhost:3000/formateur/getFormationFormateur/";
  private FormationModifUrl = "http://localhost:3000/formateur/FormationModif/";
  private FormateurModifUrl = "http://localhost:3000/formateur/FormateurModif/";
  private ListerFormationfinisUrl = "http://localhost:3000/user/ListerFormationfinis/";
  private encoursUrl = "http://localhost:3000/user/encours/";
  private FormateurModifPUrl = "http://localhost:3000/formateur/FormateurModifP";

  constructor(private http: HttpClient) { }

  //ajout
  formationAjout(formation: FormData) {

    return this.http.post<any>(this.formationAjoutUrl, formation);
  }

  formationLister() {
    return this.http.get<any>(this.formationListerUrl);
  }

  formationListerFormateur(token) {
    return this.http.get<any>(this.formationListerFormateurUrl + token);
  }

  formalabeurConnection(formalabeur: User) {
    return this.http.post<any>(this.formalabeurConnectionUrl, formalabeur);
  }
  formalabeurAjout(formalabeur: FormData) {
    return this.http.post<any>(this.formalabeurAjoutUrl, formalabeur);
  }
  formationSupprimer(titre: String) {
    return this.http.delete<any>(this.formationSupprimerUrl + titre);
  }
  getImageFormat(id) {
    return this.http.get<any>(this.getImageFormatUrl + id);
  }

  getFormation(id) {
    return this.http.get<any>(this.getFormationUrl + id);
  }

  FormationModif(id, formation: FormData) {
    return this.http.put<any>(this.FormationModifUrl + id, formation);
  }
  FormateurModif(id, formateur: FormData) {
    return this.http.put<any>(this.FormateurModifUrl + id, formateur);
  }
  FormateurModifP(pwd, fd: FormData) {
    let t = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ "Authorization": t, "Old": pwd })
    }
    console.log("old"+pwd);
    
    return this.http.post<any>(this.FormateurModifPUrl, fd, httpOptions);
  }

  inscriptionLister() {
    return this.http.get<any>(this.inscriptionListerUrl);
  }
  inscriptionSupprimer(cin: String) {
    return this.http.delete<any>(this.inscriptionSuppUrl + cin);
  }

  ListerFormationfinis(token) {
    return this.http.get<any>(this.ListerFormationfinisUrl + token);
  }
  encours(token) {
    return this.http.get<any>(this.encoursUrl + token);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isLoggedFormateur() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log("tokrn" + decodedLogin.admin);

    if (token) {

      if (decodedLogin.admin === "desactive") {
        return true;
      }

    }
    return false;
  };



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

  isLoggeduser() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log("tokrn" + decodedLogin.admin);

    if (token) {

      if (decodedLogin.formalabeur === "active") {
        return true;
      }

    }
    return false;
  };
}
