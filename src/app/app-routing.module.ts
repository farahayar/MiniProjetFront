import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AuthGuard } from './auth.guard';
import { AjoutFormateurComponent } from './components/formateur/ajout-formateur/ajout-formateur.component';
import { AdminGuard } from './Guards/admin.guard';
import { AjoutFormationComponent } from './components/formation/ajout-formation/ajout-formation.component';
import { ListerFormateurComponent } from './components/formateur/lister-formateur/lister-formateur.component';
import { ListerFormationComponent } from './components/formation/lister-formation/lister-formation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
    canActivate: [AuthGuard]
  },
      /*
      {
        path: 'inscription',
        component: InscriptionComponent,
        canActivate:[AuthGuard]
      }, */{
    path: 'ajoutFormateur',
    component: AjoutFormateurComponent,
    canActivate: [AdminGuard]

  },
  {
    path: 'ajoutFormation',
    component: AjoutFormationComponent,
    canActivate: [AdminGuard],

  }, {
    path: 'listerFormateurs',
    component: ListerFormateurComponent
  },
  {
    path: 'lister Formation',
    component: ListerFormationComponent
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
