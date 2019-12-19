import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormateurService } from 'src/app/Services/formateur.service';

@Component({
  selector: 'app-fomateur-profil',
  templateUrl: './fomateur-profil.component.html',
  styleUrls: ['./fomateur-profil.component.scss']
})
export class FomateurProfilComponent implements OnInit {

  idFormateur: string;
  nom: String;
  prenom: String;
  age: Number;
  fonction: String;
  salaire: String;
  tel: String;
  email: String;
  image_formateur: String;
  isLoggedAdmin: boolean;
  formateurs = [];

  constructor(private t: Title, private toastr: ToastrService, private _fu: FormateurService, private router: Router) {
    this.t.setTitle("FormaLab");
  }

  ngOnInit() {
    let token = localStorage.getItem("token")
    this._fu.getFormateurT(token).subscribe((formateur) => {


      this.idFormateur = formateur._id;
      this.nom = formateur.nom;
      this.image_formateur = formateur.image_formateur;
      this.age = formateur.age;
      this.prenom = formateur.prenom;
      this.email = formateur.email;
      this.fonction = formateur.fonction;
      this.salaire = formateur.salaire;
      this.tel = formateur.numero_tel;


      //this.toastr.success("Voila votre liste de formateurs!");
    }, (err) => {
      this.toastr.error("Aucun formateur!")
    });
    this.isLoggedAdmin = this._fu.isLoggedAdmin()
  }
  ModifierFormateur() {
    var closeModal2 = function () {

      $('#profileFormateur').modal('hide');

    }
    localStorage.setItem("idformateur", this.idFormateur);
    closeModal2();
  }

}
