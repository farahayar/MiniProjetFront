
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormateurService } from '../../../Services/formateur.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as bootstrap from "bootstrap";
@Component({
  selector: 'app-activer-admin',
  templateUrl: './activer-admin.component.html',
  styleUrls: ['./activer-admin.component.scss']
})
export class ActiverAdminComponent implements OnInit {

  formateurs = [];

  constructor(private t: Title, private _fs: FormateurService, private router: Router, private tr: ToastrService) 
  { this.t.setTitle("FormaLab"); }

  ngOnInit() {
    this._fs.formateurLister().subscribe((res) => {
      this.formateurs = res;
    })
  }
  closeModel(){
    console.log("a333");
    
    var closeModal1 = function () {

      $('#admins').modal('hide');
  
    }
    closeModal1();

  }
 
  activerAdmin(user) {
    console.log("zz"+user._id);

    this._fs.activateAdmin(user._id).subscribe((res) => {
      this.formateurs = res;
      this.ngOnInit();
    }, (err) => {
//      this.tr.error("Erreuur!");
    })

  }

}
