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
  isLogged: boolean;
  isLoggedAdmin: boolean;
  isLoggedFormateur:boolean;
  isLoggedSuperAdmin:boolean;
  title = 'projetdemo';
  typewriter_text: string = "Your way to Exellence !..";
  typewriter_display: string = "";


  constructor(private t: Title, private _fu: FormateurService, private router: Router, private toastr: ToastrService,private _fs:FormateurService) {
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

  typingCallback(that) {

    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    }  
  }
  /*
  typingCallback(that) {
  let total_length = that.typewriter_text.length;
  let current_length = that.typewriter_display.length;
  if (current_length < total_length) {
    that.typewriter_display += that.typewriter_text[current_length];
  } else {
    that.typewriter_display = "";
  }
  setTimeout(that.typingCallback, 200, that);
}
*/


  ngOnInit() {
    console.log("typewriter_display"+this.typewriter_display);
if(localStorage.getItem("token"))
this.typewriter_text="Welcome "+localStorage.getItem("nom")+" !..";
    this.typingCallback(this);

    this.isLogged = this._fu.isLoggedIn();
    this.isLoggedAdmin = this._fu.isLoggedAdmin();
    this.isLoggedFormateur=this._fs.isLoggedFormateur();
  this.isLoggedSuperAdmin=this._fs.isLoggedSuperAdmin();

  }

  deco() {
    this.ngOnInit();
    localStorage.removeItem('token');
    this.isLogged = false;
    if (this.router.url == "/") {

      this.router.navigate(['/home']);
    }
    else  {
      this.router.navigate(['/']);
    }
    this.toastr.success("Au revoir!")

  }
}
