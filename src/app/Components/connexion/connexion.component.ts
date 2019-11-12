import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormateurService } from 'src/app/Services/formateur.service';
import { Formateur } from 'src/app/Models/formateur';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connectionForm: FormGroup;
  formateur: Formateur;
  constructor(private t: Title, private fb: FormBuilder, private _fs: FormateurService, private toastr: ToastrService, private route: Router) {
    this.t.setTitle("Connexion");
    this.connectionForm = fb.group(
      {
        nom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        email: new FormControl("", [
          Validators.required,
          Validators.email
        ]),
        pass: new FormControl("", [
          Validators.required,

        ])
      })
    
  }

  get nom() {
    return this.connectionForm.get('nom');
  }

  get email() {
    return this.connectionForm.get('email');
  }
  get pass() {
    return this.connectionForm.get('pass');
  }

  ngOnInit() {
  }

  connection() {
    console.log("aaaaaaaa");
    
    const fd = new FormData();
    let data = this.connectionForm.value;
    const f = new Formateur(data.nom, null, null, null, null, data.email, null, null, data.pass, null);
    
    this._fs.formateurConnection(f).subscribe((res) => {
      this.route.navigate(['home']);
  
      this.toastr.success("connected");
      localStorage.setItem('token', res.token);
      
    }, (err) => {
      this.toastr.error(err.error.message);
      console.log(err);
    })
  }

}
