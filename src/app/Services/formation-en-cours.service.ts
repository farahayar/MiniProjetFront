import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationEnCoursService {

  private formationEnCoursListerUrl = "http://localhost:3000/formateur/ListerFormationsEnCours";
  constructor(private http: HttpClient) { }

  formationListerEnCours() {
    return this.http.get<any>(this.formationEnCoursListerUrl);
  }

}

