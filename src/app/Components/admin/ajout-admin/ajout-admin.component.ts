import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormateurService } from '../../../Services/formateur.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
  styleUrls: ['./ajout-admin.component.scss']
})
export class AjoutAdminComponent implements OnInit {

  formateurs = [];

  constructor(private t: Title, private _fs: FormateurService, private tr: ToastrService) 
  { this.t.setTitle("FormaLab"); }

  ngOnInit() {
    this._fs.formateurLister().subscribe((res) => {
      this.formateurs = res;
    })
  }

  activerAdmin(user) {
    console.log(user._id);

    this._fs.activateAdmin(user._id).subscribe((res) => {
      this.formateurs = res;
    }, (err) => {
      this.tr.error("Erreuur!");
    })

  }

}
