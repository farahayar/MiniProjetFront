import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormationService } from 'src/app/Services/formation.service';
import { Formation } from 'src/app/Models/formation';
import { ChangeDetectionStrategy } from '@angular/core';
import * as bootstrap from "bootstrap";
import { FormateurService } from 'src/app/Services/formateur.service';
import { Formalabeur } from 'src/app/Models/formalabeur';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-modifier-formalabeur',
  templateUrl: './modifier-formalabeur.component.html',
  styleUrls: ['./modifier-formalabeur.component.scss']
})
export class ModifierFormalabeurComponent implements OnInit {
  ModFormalabeurForm: FormGroup;
  formalabeur: Formalabeur;
  selectedFile: File;

  nomm: String;
  prenomm: String;
  agem: number;
  fonctionm: String;
  emailm: String;
  telm: String;
  cinm: String;
  lienfbm: String;
  idfm: String;
  constructor(private t: Title, private fb: FormBuilder, private _us: UserService, private toastr: ToastrService, private router: Router, private _fms: FormateurService) {
    this.t.setTitle("FormaLab");

    this.ModFormalabeurForm = fb.group(
      {
        nom: new FormControl("", [

          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        prenom: new FormControl("", [

          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        age: new FormControl("", [

          Validators.min(2)
        ]),
        tel: new FormControl("", [

          Validators.pattern('[0-9]+'),
          Validators.minLength(8)

        ]),
        email: new FormControl("",
          [

            Validators.email
          ]),
        cin: new FormControl("", [

          Validators.min(2)
        ]),
        lienfb: new FormControl("", [
          Validators.min(2)
        ]),
        pwd: new FormControl("", [

        ]),
        pwd2: new FormControl("", [

        ]),
        img: new FormControl("", [

        ]),
      }
    );
  }

  get nom() {
    return this.ModFormalabeurForm.get('nom');
  }

  get prenom() {
    return this.ModFormalabeurForm.get('prenom');
  }

  get age() {
    return this.ModFormalabeurForm.get('age');
  }

  get fonction() {
    return this.ModFormalabeurForm.get('fonction');
  }

  get tel() {
    return this.ModFormalabeurForm.get('tel');
  }

  get email() {
    return this.ModFormalabeurForm.get('email');
  }

  get cin() {
    return this.ModFormalabeurForm.get('cin');
  }
  get lienfb() {
    return this.ModFormalabeurForm.get('lienfb');
  }
  get pwd() {
    return this.ModFormalabeurForm.get('pwd');
  }
  get pwd2() {
    return this.ModFormalabeurForm.get('pwd2');
  }

  get img() {
    return this.ModFormalabeurForm.get('img');
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

  }
  ngOnInit() {


    let token = localStorage.getItem("token");

    this._us.getFormalabeur(token).subscribe((formalabeur) => {

      this.nomm = formalabeur.nom;
      this.prenomm = formalabeur.prenom;
      this.agem = formalabeur.age;
      this.fonctionm = formalabeur.fonction;
      this.emailm = formalabeur.email;
      this.telm = formalabeur.tel;
      this.cinm = formalabeur.cin;
      this.lienfbm = formalabeur.lienfb;
    }, (err) => {
      this.toastr.error("err")
    })
  }
  modFormalabeur() {
    console.log("aa");

    var closeModal1 = function () {

      $('#ModFormalabeur').modal('hide');

    }
    const fd = new FormData();
    let data = this.ModFormalabeurForm.value;

    const f = new Formalabeur(data.nom, data.prenom, data.age, data.tel, data.email, data.cin, data.lienfb, data.pwd2, null);

    if (data.img) {
      fd.append('image', this.selectedFile, this.selectedFile.name);
    }

    fd.append('formalabeur', JSON.stringify(f));
  
    
    this._us.FormalabeurModif(data.pwd,fd).subscribe((res) => {
      console.log("res"+res);
      
      closeModal1();
      if (this.router.url == "/") {

        this.router.navigate(['/home']);
      }
      else  {
        this.router.navigate(['/']);
      }
      this.toastr.success("Madifiée avec succé!");
    }, (err) => {
      this.toastr.error("Désolé votre modification n'a pas été effectué!")
      console.log("err"+err.message);
      
    });

  }

}
