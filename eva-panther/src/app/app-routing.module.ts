import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { QuienesSomosComponent } from './navbar/quienes-somos/quienes-somos.component';
import { LoginComponent } from './navbar/login/login.component';
import { ActualidadComponent } from './navbar/actualidad/actualidad.component';
import { ProyectoUnoComponent } from './asidebar/comienza/proyecto-uno/proyecto-uno.component';
import { ProyectoDosComponent } from './asidebar/comienza/proyecto-dos/proyecto-dos.component';
import { ProyectoTresComponent } from './asidebar/comienza/proyecto-tres/proyecto-tres.component';
import { HerramientasComponent } from './asidebar/herramientas/herramientas.component';
import { ExternosComponent } from './asidebar/recursos/externos/externos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { RolesComponent } from './admin/roles/roles.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'home'  , component: HomeComponent },
  { path: 'quienesSomos'  , component: QuienesSomosComponent },
  { path: 'actualidad'  , component: ActualidadComponent },
  { path: 'login'  , component: LoginComponent },
  { path: 'herramientas'  , component: HerramientasComponent },
  { path: 'proyecto-uno'  , component: ProyectoUnoComponent },
  { path: 'proyecto-dos'  , component: ProyectoDosComponent },
  { path: 'proyecto-tres'  , component: ProyectoTresComponent },
  { path: 'recursos-externos'  , component: ExternosComponent },
  { path: 'admin-usuarios'  , component: UsuariosComponent },
  { path: 'admin-roles'  , component: RolesComponent },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
