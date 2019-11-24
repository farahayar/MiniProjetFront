import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormationService } from 'src/app/Services/formation.service';
import { Formation } from 'src/app/Models/formation';

@Component({
  selector: 'app-ajout-formation',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.scss']
})
export class AjoutFormationComponent implements OnInit {
 
  addFormationForm:FormGroup;

  selectedFile: File;
  constructor(private t: Title, private fb: FormBuilder, private _fs: FormationService, private toastr: ToastrService, private router: Router) {
    this.t.setTitle("FormaLab");

    this.addFormationForm = fb.group(
      {
        titre: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        description: new FormControl("", [
          Validators.required,
          Validators.min(2)
        ]),
        volume_horaire: new FormControl("", [
          Validators.required
        ]),
        prix: new FormControl("", [
          Validators.required,
          Validators.min(2)
        ]),
        img: new FormControl("", [
          Validators.required
        ]),
        idformateur: new FormControl("", [
          Validators.required,
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
    return this.addFormationForm.get('idformateur');
  }
  get img() {
    return this.addFormationForm.get('img');
  }
  get description(){
    return this.addFormationForm.get('description');
  }
  get volume_horaire(){
    return this.addFormationForm.get('volume_horaire');
  }
  get prix(){
    return this.addFormationForm.get('prix');
  }
  get titre(){
    return this.addFormationForm.get('prix');
  }
  ngOnInit() {
  }
  addFormation(){
    console.log("aa");
    
    const fd = new FormData();
    let data = this.addFormationForm.value;
    const f = new Formation(data.titre,data.description,data.volume_horaire,data.prix,data.idformateur,data.img);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('formation', JSON.stringify(f));

    this._fs.formationAjout(fd).subscribe((res)=>{
      this.toastr.success("Ajout avec succé!");
    },(err)=>{
      this.toastr.error("Désolé votre ajout n'a pas été effectué!")
    });

  }
}
