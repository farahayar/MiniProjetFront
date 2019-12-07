import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormateurService } from 'src/app/Services/formateur.service';
import { Formateur } from 'src/app/Models/formateur';
//import * as $ from "jQuery"
import * as bootstrap from "bootstrap"

@Component({
  selector: 'app-ajout-formateur',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.scss']
})
export class AjoutFormateurComponent implements OnInit {

  addFormateurForm: FormGroup;
  formateur: Formateur;
  selectedFile: File;
  constructor(private t: Title, private fb: FormBuilder, private _fs: FormateurService, private toastr: ToastrService, private router: Router) {
    this.t.setTitle("FormaLab");

    this.addFormateurForm = fb.group(
      {
        nom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        prenom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        age: new FormControl("", [
          Validators.required,
          Validators.min(2)
        ]),
        fonction: new FormControl("", [
        ]),
        tel: new FormControl("", [
          Validators.required,
          Validators.pattern('[0-9]+'),
          Validators.minLength(8)

        ]),
        email: new FormControl("",
          [
            Validators.required,
            Validators.email
          ]),
        salaire: new FormControl("", [
          Validators.required,
          Validators.min(2)
        ]),
        img: new FormControl("", [
          Validators.required
        ]),
      }
    );
  }

  get nom() {
    return this.addFormateurForm.get('nom');
  }

  get prenom() {
    return this.addFormateurForm.get('prenom');
  }

  get age() {
    return this.addFormateurForm.get('age');
  }

  get fonction() {
    return this.addFormateurForm.get('fonction');
  }

  get tel() {
    return this.addFormateurForm.get('tel');
  }

  get email() {
    return this.addFormateurForm.get('email');
  }

  get salaire() {
    return this.addFormateurForm.get('salaire');
  }

  get img() {
    return this.addFormateurForm.get('img');
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

  }



  ngOnInit() {
  }

  addFormateur() {

    var closeModal1 = function () {

      $('#AjoutFormateur').modal('hide');

    }
    const fd = new FormData();
    let data = this.addFormateurForm.value;
    const f = new Formateur(data.nom, data.prenom, data.age, data.fonction, data.tel, data.email, data.salaire, null, null, data.image);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('formateur', JSON.stringify(f));

    this._fs.formateurAjout(fd).subscribe((res) => {
      closeModal1();
      this.toastr.success("Ajout avec succé!");
      this.ngOnInit();
    }, (err) => {
      this.toastr.error("Désolé votre ajout n'a pas été effectué!")
    });

  }
}
