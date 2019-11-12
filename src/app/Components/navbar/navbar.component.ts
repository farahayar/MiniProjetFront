import { Component, OnInit } from '@angular/core';
import * as $ from "../../../vendor/jquery/jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'projetdemo';
  constructor() {
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
  }

  // Collapse Navbar
 

}
