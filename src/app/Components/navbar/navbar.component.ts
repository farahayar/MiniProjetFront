import { Component, OnInit } from '@angular/core';
import * as $ from "../../../vendor/jquery/jquery";
import { FormateurService } from 'src/app/Services/formateur.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'projetdemo';
  isLogged: boolean;
  isLoggedAdmin: boolean;
  isLoggedFormateur:boolean;
  isLoggedSuperAdmin:boolean;
  constructor(private _fu: FormateurService) {
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

  ngOnInit() {
    this.isLogged = this._fu.isLoggedIn();
    this.isLoggedAdmin = this._fu.isLoggedAdmin();
    this.isLoggedFormateur=this._fu.isLoggedFormateur();
    this.isLoggedSuperAdmin=this._fu.isLoggedSuperAdmin();
    
  }

  // Collapse Navbar
 

}
