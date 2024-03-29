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
import { Formateur } from 'src/app/Models/formateur';

@Component({
  selector: 'app-modifier-formateur-profil',
  templateUrl: './modifier-formateur-profil.component.html',
  styleUrls: ['./modifier-formateur-profil.component.scss']
})
export class ModifierFormateurProfilComponent implements OnInit {

 
  modFormateurPForm: FormGroup;
  formateur: Formateur;
  selectedFile: File;

  nomm: String;
  prenomm: String;
  agem: number;
  fonctionm: String;
  emailm: String;
  telm: String;
  salairem: String;
  idfm: String;
  constructor(private t: Title, private fb: FormBuilder, private _fs: FormationService, private toastr: ToastrService, private router: Router, private _fms: FormateurService) {
    this.t.setTitle("FormaLab");

    this.modFormateurPForm = fb.group(
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
        fonction: new FormControl("", [
        ]),
        tel: new FormControl("", [
         
          Validators.pattern('[0-9]+'),
          Validators.minLength(8)

        ]),
        email: new FormControl("",
          [
           
            Validators.email
          ]),
        salaire: new FormControl("", [
         
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
    return this.modFormateurPForm.get('nom');
  }

  get prenom() {
    return this.modFormateurPForm.get('prenom');
  }

  get age() {
    return this.modFormateurPForm.get('age');
  }

  get fonction() {
    return this.modFormateurPForm.get('fonction');
  }

  get tel() {
    return this.modFormateurPForm.get('tel');
  }

  get email() {
    return this.modFormateurPForm.get('email');
  }

  get salaire() {
    return this.modFormateurPForm.get('salaire');
  }

  get img() {
    return this.modFormateurPForm.get('img');
  }
  get pwd() {
    return this.modFormateurPForm.get('pwd');
  }
  get pwd2() {
    return this.modFormateurPForm.get('pwd2');
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

  }
  ngOnInit() {

    
    this.idfm = localStorage.getItem("idformateur");

    console.log("idformateur" + this.idfm);
    this._fms.getFormateur(this.idfm).subscribe((formateur) => {

      this.nomm = formateur.nom;
      this.prenomm = formateur.prenom;
      this.agem = formateur.age;
      this.fonctionm = formateur.fonction;
      this.emailm = formateur.email;
      this.telm = formateur.numero_tel ;
      this.salairem = formateur.salaire;
    }, (err) => {
      this.toastr.error("err")
    })
  }
  modFormateurp() {
    console.log("aa");

    var closeModal1 = function () {

      $('#ModFormateurP').modal('hide');

    }
    const fd = new FormData();
    let data = this.modFormateurPForm.value;

    const f = new Formateur(data.nom, data.prenom, data.age, data.fonction, data.tel, data.email, data.salaire, null, data.pwd2, data.image);

    if (data.img) {
      fd.append('image', this.selectedFile, this.selectedFile.name);
    }

    fd.append('formateur', JSON.stringify(f));

    this._fs.FormateurModifP(data.pwd, fd).subscribe((res) => {
      closeModal1();
      if (this.router.url == "/") {

        this.router.navigate(['/home']);
      }
      else if (this.router.url == "/home") {
        this.router.navigate(['/']);
      }
      this.toastr.success("Madifiée avec succé!");
    }, (err) => {
      this.toastr.error("Désolé votre modification n'a pas été effectué!")
    });

  }

}

