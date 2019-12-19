import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Formalabeur } from 'src/app/Models/formalabeur';

@Component({
  selector: 'app-inscri-formalabeur',
  templateUrl: './inscri-formalabeur.component.html',
  styleUrls: ['./inscri-formalabeur.component.scss']
})
export class InscriFormalabeurComponent implements OnInit {

  addFormalabeurForm: FormGroup;
  formalabeur: User;
  selectedFile: File;
  constructor(private t: Title, private fb: FormBuilder, private _fs: UserService, private toastr: ToastrService, private router: Router) {
    this.t.setTitle("FormaLab");

    this.addFormalabeurForm = fb.group(
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
        cin: new FormControl("", [
          Validators.required,
          Validators.min(7)
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
        pwd: new FormControl("", [
          Validators.required,
          Validators.min(4)
        ]),
        lienfb: new FormControl("",
          [
            Validators.required,

          ]),
        img: new FormControl("", [
          Validators.required
        ]),
      }
    );
  }
  get nom() {
    return this.addFormalabeurForm.get('nom');
  }

  get prenom() {
    return this.addFormalabeurForm.get('prenom');
  }

  get age() {
    return this.addFormalabeurForm.get('age');
  }

  get cin() {
    return this.addFormalabeurForm.get('cin');
  }

  get tel() {
    return this.addFormalabeurForm.get('tel');
  }

  get email() {
    return this.addFormalabeurForm.get('email');
  }

  get pwd() {
    return this.addFormalabeurForm.get('pwd');
  }
  get lienfb() {
    return this.addFormalabeurForm.get('lienfb');
  }

  get img() {
    return this.addFormalabeurForm.get('img');
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

  }

  ngOnInit() {
  }
  addFormalabeur() {
    var closeModal3 = function () {
    
      $('#InscriptionForm').modal('hide');
   
  }

    const fd = new FormData();
    let data = this.addFormalabeurForm.value;
    const f = new Formalabeur(data.nom, data.prenom, data.age, data.tel, data.email, data.cin, data.lienfb, data.pwd, null);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('formalabeur', JSON.stringify(f));
    console.log("formalabeur" + fd.get("formalabeur"));

    this._fs.formalabeurAjout(fd).subscribe((res) => {
      closeModal3();
      this.toastr.success("Ajout avec succé!");
      if (this.router.url == "/") {

        this.router.navigate(['/home']);
      }
      else if (this.router.url == "/home") {
        this.router.navigate(['/']);
      }
      this.router.navigate(['/home']);
      this.router.navigate(['']);
    }, (err) => {
      this.toastr.error("Désolé votre ajout n'a pas été effectué!")
    });

  }


}
