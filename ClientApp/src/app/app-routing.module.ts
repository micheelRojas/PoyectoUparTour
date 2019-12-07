import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MenuComponent } from './menu/menu.component';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaAddComponent } from './reserva-add/reserva-add.component';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarAddComponent } from './lugar-add/lugar-add.component';
import { LugarEditComponent } from './lugar-edit/lugar-edit.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteAddComponent } from './restaurante-add/restaurante-add.component';
import { RestauranteEditComponent } from './restaurante-edit/restaurante-edit.component';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorAddComponent } from './conductor-add/conductor-add.component';
import { ConductorEditComponent } from './conductor-edit/conductor-edit.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoAddComponent } from './vehiculo-add/vehiculo-add.component';
import { VehiculoEditComponent } from './vehiculo-edit/vehiculo-edit.component';
import { ClienteConsultaComponent } from './clientes/consulta/cliente-consulta/cliente-consulta.component';
import { ClienteConsultaModalComponent } from './clientes/consulta/cliente-consulta-modal/cliente-consulta-modal.component';
import { ModalComponent } from './clientes/consulta/modal/modal.component';

const routes: Routes = [
  {
    path:'clientelist',
    component: ClienteListComponent
  },
  {
    path:'clienteadd',
    component:ClienteAddComponent
  },
  {
    path:'clienteedit/:identificacion',
    component:ClienteEditComponent
  },
  {
    path:'reservalist',
    component: ReservaListComponent
  },
  {
    path:'reservaadd/:clienteid',
    component:ReservaAddComponent
  },
  {
    path:'reservaedit/:id',
    component:ReservaEditComponent
  },
  {
    path:'lugarlist',
    component: LugarListComponent
  },
  {
    path:'lugaradd',
    component:LugarAddComponent
  },
  {
    path:'lugaredit/:id',
    component:LugarEditComponent
  },
  {
    path:'hotellist',
    component: HotelListComponent
  },
  {
    path:'hoteladd',
    component:HotelAddComponent
  },
  {
    path:'hoteledit/:id',
    component:HotelEditComponent
  },
  {
    path:'restaurantelist',
    component: RestauranteListComponent
  },
  {
    path:'restauranteadd',
    component: RestauranteAddComponent
  },
  {
    path:'restauranteedit/:id',
    component: RestauranteEditComponent
  },
  {
    path:'conductorlist',
    component: ConductorListComponent
  },
  {
    path:'conductoradd',
    component: ConductorAddComponent
  },
  {
    path:'conductoredit/:identificacion',
    component: ConductorEditComponent
  },
  {
    path:'vehiculolist',
    component: VehiculoListComponent
  },
  {
    path:'vehiculoadd',
    component: VehiculoAddComponent
  },
  {
    path:'vehiculoedit/:placa',
    component: VehiculoEditComponent
  },
  {
    path:'ayuda',
    component: AyudaComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'clienteconsulta',
    component:ClienteConsultaComponent
  },
  {
    path:'clienteconsultamodal',
    component:ClienteConsultaModalComponent
  },
  {
    path:'modal',
    component:ModalComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
