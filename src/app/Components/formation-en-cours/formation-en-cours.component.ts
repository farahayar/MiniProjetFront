import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormationEnCoursService } from 'src/app/Services/formation-en-cours.service';


@Component({
  selector: 'app-formation-en-cours',
  templateUrl: './formation-en-cours.component.html',
  styleUrls: ['./formation-en-cours.component.scss']
})
export class FormationEnCoursComponent implements OnInit {

  formations = [];
  constructor(private t: Title, private toastr: ToastrService, private _fu: FormationEnCoursService, private router: Router) {
    this.t.setTitle("FormaLab");
  }

  ngOnInit() {
    this._fu.formationListerEnCours().subscribe((res) => { 
      console.log(res);
      
      this.formations = res;
     }, (err) => { 
      this.toastr.error("Aucune formation!")
     });
  }

}
 