import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';

const routes: Routes = [

{path: 'usuarios', component:UsuarioComponent},

{path: 'productos', component:ProductoComponent},

{path: 'registroproducto', component:RegistroProductoComponent},

{path: 'registrousuario', component:RegistroUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
