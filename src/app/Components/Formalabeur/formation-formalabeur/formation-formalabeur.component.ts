import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/Services/formation.service';

@Component({
  selector: 'app-formation-formalabeur',
  templateUrl: './formation-formalabeur.component.html',
  styleUrls: ['./formation-formalabeur.component.scss']
})
export class FormationFormalabeurComponent implements OnInit {
  isLoggedAdmin: boolean;
  formations = [];
  formationseC = [];

  constructor(private t: Title, private toastr: ToastrService, private _fu: FormationService, private router: Router) {
    this.t.setTitle("FormaLab");
  }

  ngOnInit() {
    let token = localStorage.getItem("token");
    this._fu.ListerFormationfinis(token).subscribe((res) => {
      console.log(res);

      this.formations = res;
    }, (err) => {
      this.toastr.error("Aucune formation!")
    });
    if (this.formations != []) {
      this._fu.encours(token).subscribe((res) => {
        console.log("77777" + res);

        this.formationseC = res;
      }, (err) => {
        this.toastr.error("Aucune formation!")
      });
    }

    this.isLoggedAdmin = this._fu.isLoggedAdmin();
  }

}
