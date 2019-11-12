import { Component } from '@angular/core';
import * as $ from "jQuery"
import { Title } from '@angular/platform-browser';
import { FormateurService } from 'src/app/Services/formateur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLogged:boolean;
  title = 'projetdemo';
  constructor(private t: Title,private _fu:FormateurService,private router: Router,private toastr:ToastrService) {
    this.t.setTitle("FormaLab");
    // Collapse Navbar
    var navbarCollapse = function () {
      $(document).ready(function () {
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-scrolled");
        } else {
          $("#mainNav").removeClass("navbar-scrolled");
        }
      });
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  ngOnInit(): void {
    this.isLogged=this._fu.isLoggedAdmin();
  }

  deco() {
    this.ngOnInit();
    localStorage.removeItem('token');
    this.isLogged = false;
    
    this.router.navigate(['']);
this.toastr.success("Au revoir!")

  }
}
