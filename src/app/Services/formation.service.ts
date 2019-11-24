import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private formationAjoutUrl = "http://localhost:3000/formateur/ajouterformation";
  private formationListerUrl = "http://localhost:3000/formateur/ListerFormations";
  constructor(private http: HttpClient) { }
  
  //ajout
  formationAjout(formation: FormData) {
    
    return this.http.post<any>(this.formationAjoutUrl, formation);
  }

  formationLister() {
    return this.http.get<any>(this.formationListerUrl);
  }
}
