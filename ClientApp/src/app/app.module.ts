import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule }from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MenuComponent } from './menu/menu.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AppRoutingModule } from './app-routing.module';
import { ReservaAddComponent } from './reserva-add/reserva-add.component';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';
import { LugarAddComponent } from './lugar-add/lugar-add.component';
import { LugarEditComponent } from './lugar-edit/lugar-edit.component';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { RestauranteAddComponent } from './restaurante-add/restaurante-add.component';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteEditComponent } from './restaurante-edit/restaurante-edit.component';
import { ConductorAddComponent } from './conductor-add/conductor-add.component';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorEditComponent } from './conductor-edit/conductor-edit.component';
import { VehiculoEditComponent } from './vehiculo-edit/vehiculo-edit.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoAddComponent } from './vehiculo-add/vehiculo-add.component';
import { FiltroClientePipe } from './pipes/filtro-cliente.pipe';
import { AlertModalComponent } from './@base/modals/alert-modal/alert-modal.component';
import { ClienteConsultaComponent } from './clientes/consulta/cliente-consulta/cliente-consulta.component';
import { ClienteConsultaModalComponent } from './clientes/consulta/cliente-consulta-modal/cliente-consulta-modal.component';
import { ModalComponent } from './clientes/consulta/modal/modal.component';
import { FiltroHotelPipe } from './pipes/filtro-hotel.pipe';
import { HotelConsultaComponent } from './clientes/consulta/hotel-consulta/hotel-consulta.component';
import { FiltroRestaurantePipe } from './pipes/filtro-restaurante.pipe';
import { FiltroGuiaPipe } from './pipes/filtro-guia.pipe';
import { FiltroConductorPipe } from './pipes/filtro-conductor.pipe';
import { FiltroVehiculoPipe } from './pipes/filtro-vehiculo.pipe';
import { FiltroTransportePipe } from './pipes/filtro-transporte.pipe';
import { FiltroTourPipe } from './pipes/filtro-tour.pipe';
import { FiltroReservaPipe } from './pipes/filtro-reserva.pipe';
import { FiltroLugarPipe } from './pipes/filtro-lugar.pipe';
import { RestauranteConsultaComponent } from './clientes/consulta/restaurante-consulta/restaurante-consulta.component';
import { GuiaConsultaComponent } from './clientes/consulta/guia-consulta/guia-consulta.component';
import { ConductorConsultaComponent } from './clientes/consulta/conductor-consulta/conductor-consulta.component';
import { VehiculoConsultaComponent } from './clientes/consulta/vehiculo-consulta/vehiculo-consulta.component';
import { TransporteConsultaComponent } from './clientes/consulta/transporte-consulta/transporte-consulta.component';
import { TourConsultaComponent } from './clientes/consulta/tour-consulta/tour-consulta.component';
import { ReservaConsultaComponent } from './clientes/consulta/reserva-consulta/reserva-consulta.component';
import { LugarConsultaComponent } from './clientes/consulta/lugar-consulta/lugar-consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteAddComponent,
    ClienteListComponent,
    ClienteEditComponent,
    AyudaComponent,
    ServiciosComponent,
    MenuComponent,
    NosotrosComponent,
    ReservaAddComponent,
    ReservaListComponent,
    ReservaEditComponent,
    LugarAddComponent,
    LugarEditComponent,
    LugarListComponent,
    HotelAddComponent,
    HotelEditComponent,
    HotelListComponent,
    RestauranteAddComponent,
    RestauranteListComponent,
    RestauranteEditComponent,
    ConductorAddComponent,
    ConductorListComponent,
    ConductorEditComponent,
    VehiculoEditComponent,
    VehiculoListComponent,
    VehiculoAddComponent,
    FiltroClientePipe,
    AlertModalComponent,
    ClienteConsultaComponent,
    ClienteConsultaModalComponent,
    ModalComponent,
    FiltroHotelPipe,
    HotelConsultaComponent,
    FiltroRestaurantePipe,
    FiltroGuiaPipe,
    FiltroConductorPipe,
    FiltroVehiculoPipe,
    FiltroTransportePipe,
    FiltroTourPipe,
    FiltroReservaPipe,
    FiltroLugarPipe,
    RestauranteConsultaComponent,
    GuiaConsultaComponent,
    ConductorConsultaComponent,
    VehiculoConsultaComponent,
    TransporteConsultaComponent,
    TourConsultaComponent,
    ReservaConsultaComponent,
    LugarConsultaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService, {dataEncapsulation: false}
    ),*/
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  //entryComponents:[ClienteConsultaComponent],
  entryComponents:[AlertModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
