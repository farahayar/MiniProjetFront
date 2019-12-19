import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormationService } from 'src/app/Services/formation.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import * as bootstrap from "bootstrap"
@Component({
  selector: 'app-lister-formation',
  templateUrl: './lister-formation.component.html',
  styleUrls: ['./lister-formation.component.scss']
})
export class ListerFormationComponent implements OnInit {
  isLoggedAdmin: boolean;
  isLoggeduser: boolean;
  isLoggedFormateur: boolean;
  titre: String;
  description: String;
  volume_horaire: number;
  prix: String;
  idformateur: String;
  img: String;
  date: String;
  imgFormateur: String;
  inscriptionForm: FormGroup;
  id: number;
  formations = [];
  users = [];
  constructor(private t: Title, private fb: FormBuilder, private toastr: ToastrService,
    private _fu: FormationService, private router: Router, private _us: UserService) {
    this.t.setTitle("FormaLab");


    this.inscriptionForm = fb.group(
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
        cin: new FormControl("", [
          Validators.required,
          Validators.min(8)
        ]),
        lienfb: new FormControl("", [
          Validators.required
        ]),
      }
    );
  }

  get nom() {
    return this.inscriptionForm.get('nom');
  }

  get prenom() {
    return this.inscriptionForm.get('prenom');
  }

  get age() {
    return this.inscriptionForm.get('age');
  }

  get tel() {
    return this.inscriptionForm.get('tel');
  }

  get email() {
    return this.inscriptionForm.get('email');
  }

  get cin() {
    return this.inscriptionForm.get('cin');
  }
  get lienfb() {
    return this.inscriptionForm.get('lienfb');
  }




  ngOnInit() {
    this._fu.formationLister().subscribe((res) => {
      console.log(res);

      this.formations = res;
    }, (err) => {
      this.toastr.error("Aucune formation!")
    });

    this.isLoggeduser = this._us.isLoggedIn();
    this.isLoggedAdmin = this._fu.isLoggedAdmin();
    this.isLoggedFormateur = this._fu.isLoggedFormateur();
    
    if (this.isLoggedFormateur) {
      this._fu.formationListerFormateur(localStorage.getItem("token")).subscribe((res) => {
        console.log(res);

        this.formations = res;
      }, (err) => {
        this.toastr.error("Aucune formation!")
      });
    }

  }
  ConslterFormation(formation) {
    console.log("id=" + formation.idformateur);

    this._fu.getImageFormat(formation.idformateur).subscribe((res) => {
      this.imgFormateur = res.image_formateur;
    }, (err) => { });
    this.titre = formation.titre;
    this.description = formation.description;
    this.prix = formation.prix;
    this.volume_horaire = formation.volume_horaire;
    this.idformateur = formation.idformateur;
    this.img = formation.image_Formation;
    this.id = formation._id;
    this.date = formation.date;
  }

  ConsulterInscription() {
    this.isLoggeduser = this._fu.isLoggeduser();


  }

  InscriptionFormation(formation) {
    let token = localStorage.getItem("token");
    if (token) {

    }
  }

  closemodal() {
    var closeModal2 = function () {

      $('#formationcons').modal('hide');

    }
    closeModal2();
  }


  supprimerFormation(titre) {
    var closeModal2 = function () {

      $('#formationcons').modal('hide');

    }
    console.log(titre);
    this._fu.formationSupprimer(titre).subscribe((res) => {
      closeModal2();
      this.ngOnInit();
      this.toastr.success("Suppression avec succée!");
      this.router.navigate(['/home']);
      this.router.navigate(['']);
    }, (err) => {
      this.toastr.error("Suppression non éffectuée!");
    })

  }

  sinscrir() {
    var closeModal2 = function () {

      $('#formInsc').modal('hide');

    }
    const fd = new FormData();
    let data = this.inscriptionForm.value;
    const user = new User(data.nom, data.prenom, data.age, data.tel, data.email, data.cin, data.lienfb);
    console.log("user " + user.cin);

    this._us.InscriptionFormation(user, this.id).subscribe((res) => {
      closeModal2();
      this.toastr.success("Ajout avec succé!");
      this.ngOnInit();
    }, (err) => {
      this.toastr.error("Désolé votre ajout n'a pas été effectué!")
    });

  }

  closecons() {
    var closeModal4 = function () {

      $('#formationcons').modal('hide');

    }
    let token = localStorage.getItem("token");
    closeModal4();

    this._us.getAllUsers(this.titre).subscribe((res) => { this.users = res; }, (err) => { });

  }

  ModifierFormation(idf) {
    var closeModal2 = function () {

      $('#formationcons').modal('hide');

    }
    localStorage.setItem("idf", idf);
    closeModal2();



  }

  inscriptionFormationFormalabeur() {
    var closeModal2 = function () {

      $('#formationcons').modal('hide');

    }
    
    let token = localStorage.getItem("token");
    this._us.InscriptionFormation({ token }, this.id).subscribe((res) => {
      closeModal2();
      this.toastr.success("Votre inscription a été effectuée");
    }, (err) => {
      this.toastr.error("Erreur :" + err);
    })
  }
}


