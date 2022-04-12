import { CriarUsuarioComponent } from './usuarios/criar-usuario/criar-usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path:'', component: DashboardComponent,children:[
    {path:'',component: InicioComponent},
    {path:'usuarios',component: UsuariosComponent},
    {path:'reportes',component: ReportesComponent},
    {path:'criar-usuario',component: CriarUsuarioComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
