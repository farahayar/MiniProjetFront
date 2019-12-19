import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormateurService } from 'src/app/Services/formateur.service';


@Component({
  selector: 'app-lister-formateur',
  templateUrl: './lister-formateur.component.html',
  styleUrls: ['./lister-formateur.component.scss']
})
export class ListerFormateurComponent implements OnInit {
  idFormateur:string;
  nom:String;
  prenom:String;
  age:Number;
  fonction:String;
  salaire:String;
  tel:String;
  email:String;
  image_formateur:String;
  isLoggedAdmin:boolean;
  formateurs = [];
  
  constructor(private t: Title, private toastr: ToastrService, private _fu: FormateurService, private router: Router) {
    this.t.setTitle("FormaLab");
  }

  ngOnInit() {

    this._fu.formateurLister().subscribe((res) => { 
      console.log(res);
      
      this.formateurs = res;
      //this.toastr.success("Voila votre liste de formateurs!");
     }, (err) => { 
      this.toastr.error("Aucun formateur!")
     });
     this.isLoggedAdmin=this._fu.isLoggedAdmin()
  }
  ConslterFormateur(formateur){
    console.log("IDfOEMATEUR"+formateur._id);
    
    this.idFormateur=formateur._id;
    this.nom =formateur.nom;
    this.image_formateur=formateur.image_formateur;
    this.age=formateur.age;
    this.prenom=formateur.prenom;
    this.email=formateur.email;
    this.fonction=formateur.fonction;
    this.salaire=formateur.salaire;
    this.tel=formateur.numero_tel;

  }
  supprimerFormateur(email){
    console.log(email);
    var closeModal2 = function () {

      $('#conformateur').modal('hide');

    }
    
    this._fu.formateurSupprimer(email).subscribe((res)=>{
      closeModal2();
      this.ngOnInit();
      this.toastr.success("Suppression avec succée!");
      this.router.navigate(['/home']);
      this.router.navigate(['']);
    },(err)=>{
      this.toastr.error("Suppression non éffectuée!");
    })
  }

  ModifierFormateur(id) {
    var closeModal2 = function () {

      $('#conformateur').modal('hide');

    }
    localStorage.setItem("idformateur", this.idFormateur);
    closeModal2();



  }


}