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

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.scss']
})
export class ModifierFormationComponent implements OnInit {

  modFormationForm: FormGroup;

  selectedFile: File;

  formateurs = [];

  titrem: String;
  descriptionm: String;
  volume_horairem: number;
  prixm: String;
  idformateurm: String;
  imgm: String;
  datem: String;
  idm: String;
  constructor(private t: Title, private fb: FormBuilder, private _fs: FormationService, private toastr: ToastrService, private router: Router, private _fms: FormateurService) {
    this.t.setTitle("FormaLab");

    this.modFormationForm = fb.group(
      {
        titre: new FormControl("", [

          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        description: new FormControl("", [

          Validators.min(2)
        ]),
        volume_horaire: new FormControl("", [
        
        ]),
        prix: new FormControl("", [

          Validators.min(2)
        ]),
        date: new FormControl("", [

          Validators.min(10)
        ]),
        img: new FormControl("", [

        ]),
        idformateur: new FormControl("", [

          Validators.min(2)
        ]),
      }
    );
  }
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

  }
  get idformateur() {
    return this.modFormationForm.get('idformateur');
  }
  get img() {
    return this.modFormationForm.get('img');
  }
  get description() {
    return this.modFormationForm.get('description');
  }
  get volume_horaire() {
    return this.modFormationForm.get('volume_horaire');
  }
  get prix() {
    return this.modFormationForm.get('prix');
  }
  get date() {
    return this.modFormationForm.get('date');
  }
  get titre() {
    return this.modFormationForm.get('titre');
  }
  ngOnInit() {

    this._fms.formateurLister().subscribe((res) => {
      this.formateurs = res;
    })
    this.idm = localStorage.getItem("idf");
    console.log("idm" + this.idm);
    this._fs.getFormation(this.idm).subscribe((formation) => {

      this.titrem = formation.titre;
      console.log("tt" + this.titrem);

      this.descriptionm = formation.description;
      this.prixm = formation.prix;
      this.volume_horairem = formation.volume_horaire;
      this.idformateurm = formation.idformateur;
      this.datem = formation.date;
    }, (err) => {
      this.toastr.error("errrrrr")
    })
  }
  modFormation() {
    console.log("aa");

    var closeModal1 = function () {

      $('#modifFormation').modal('hide');

    }
    const fd = new FormData();
    let data = this.modFormationForm.value;

    const f = new Formation(data.titre, data.description, data.volume_horaire, data.prix, data.idformateur, data.img, data.date);
    if (data.img) {
      fd.append('image', this.selectedFile, this.selectedFile.name);
    }

    fd.append('formation', JSON.stringify(f));

    this._fs.FormationModif(this.idm, fd).subscribe((res) => {
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
