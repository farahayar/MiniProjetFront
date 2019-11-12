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


}
