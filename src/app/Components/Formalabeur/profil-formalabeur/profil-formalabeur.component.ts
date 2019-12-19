import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormateurService } from 'src/app/Services/formateur.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-profil-formalabeur',
  templateUrl: './profil-formalabeur.component.html',
  styleUrls: ['./profil-formalabeur.component.scss']
})
export class ProfilFormalabeurComponent implements OnInit {
  idFormalabeur:string;
  nom:String;
  prenom:String;
  age:Number;
  tel:String;
  email:String;
  cin:String;
  lienfb:String; 
  img:String;

  constructor(private t: Title, private toastr: ToastrService, private _su: UserService, private router: Router) { }

  ngOnInit() {
    let token =localStorage.getItem("token");
    this._su.getFormalabeur(token).subscribe((res)=>{
      console.log("res1"+res);
      
      this.idFormalabeur=res.idFormalabeur;
      this.nom=res.nom;
      this.prenom=res.prenom;
      this.age=res.age;
      this.tel=res.tel;
      this.email=res.email;
      this.cin=res.cin;
      this.lienfb=res.lienfb;
      this.img=res.img;

    })

  }
  closeModel(){
    var closeModal1 = function () {

      $('#profileFormalabeur').modal('hide');

    }
    closeModal1();
  }

}
