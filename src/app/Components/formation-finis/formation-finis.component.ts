import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/Services/formation.service';

@Component({
  selector: 'app-formation-finis',
  templateUrl: './formation-finis.component.html',
  styleUrls: ['./formation-finis.component.scss']
})
export class FormationFinisComponent implements OnInit {
  isLoggedAdmin: boolean;
  formations=[];


  constructor(private t: Title, private toastr: ToastrService, private _fu: FormationService, private router: Router ) {
    this.t.setTitle("FormaLab");
  }

  ngOnInit() {
    this._fu.ListerFormationfinis().subscribe((res) => { 
      console.log(res);
      
      this.formations = res;
    }, (err) => {
      this.toastr.error("Aucune formation!")
    });
    
    this.isLoggedAdmin = this._fu.isLoggedAdmin();
  }

}
