import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycomponentComponent } from 'src/app/mycomponent/mycomponent.component';

//arreglo de rutas
const routes: Routes = [

  {
    path: '', //http://localhost:4200/
    component: MycomponentComponent

    //crear un componente llamado login-page
    //dentro del modulo de Auth
    //ng g c Modules/Auth/login-page

  }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
