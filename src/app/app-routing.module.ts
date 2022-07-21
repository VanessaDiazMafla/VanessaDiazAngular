import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Modules/auth/login-page/login-page.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { ValidationsComponent } from './Modules/auth/validations/validations.component';
import { MarcadoresViewComponent } from './Modules/favoritos/marcadores-view/marcadores-view.component';
import { HistoryMenuComponent } from './Modules/historial/history-menu/history-menu.component';
import { FooterComponent } from './Modules/home/footer/footer.component';
import { HeadersComponent } from './Modules/home/headers/headers.component';
import { TrackListComponent } from './Modules/tracks/track-list/track-list.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [

  //Rutas del Modulo Auth
  {
    path:'', //local host
    component:MycomponentComponent
  },
  {
    path:'autenticacion',
    component: LoginPageComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'validacion',
    component: ValidationsComponent
  },

  //Ruta del modulo favoritos

  {
    path: 'marcadores',
    component: MarcadoresViewComponent
  },

  //Ruta del modulo Historial

  {
    path: 'historial',
    component: HistoryMenuComponent
  },

  //Rutas del Modulo Home

  {
    path: 'header', //encabezado
    component: HeadersComponent
  },

  {
    path: 'footer', //pie de pag
    component: FooterComponent
  },

  // Ruta del modulo Tracks

  {
    path: 'tracks', //pistas
    component: TrackListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
