import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormationService } from 'src/app/Services/formation.service';


@Component({
  selector: 'app-lister-formation',
  templateUrl: './lister-formation.component.html',
  styleUrls: ['./lister-formation.component.scss']
})
export class ListerFormationComponent implements OnInit {

  formations = [];
  constructor(private t: Title, private toastr: ToastrService, private _fu: FormationService, private router: Router) {
    this.t.setTitle("FormaLab");
  }


  ngOnInit() {
    this._fu.formationLister().subscribe((res) => { 
      console.log(res);
      
      this.formations = res;
     }, (err) => { 
      this.toastr.error("Aucune formation!")
     });
  }

}
