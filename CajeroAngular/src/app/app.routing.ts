import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './Components/balance/balance.component';
import { ErrorNotFoundComponent } from './Components/error-not-found/error-not-found.component';
import { ErrorComponent } from './Components/error/error.component';
import { IngresarPinComponent } from './Components/ingresar-pin/ingresar-pin.component';
import { InicioTarjetaComponent } from './Components/inicio-tarjeta/inicio-tarjeta.component';
import { OperacionesComponent } from './Components/operaciones/operaciones.component';
import { TarjetaBloqueadaComponent } from './Components/tarjeta-bloqueada/tarjeta-bloqueada.component';
import { ResultadoOperacionComponent } from './Components/resultado-operacion/resultado-operacion.component';
import { RetiroComponent } from './Components/retiro/retiro.component';

const appRoutes:Routes= [
    { path: '', component: InicioTarjetaComponent},
    { path: 'pin/:numeroTarjeta', component: IngresarPinComponent},
    { path: 'error', component: ErrorComponent},
    { path: 'operaciones/:numeroTarjeta', component: OperacionesComponent},
    { path: 'not-found', component: ErrorNotFoundComponent},
    { path: 'tarjeta-bloqueada', component: TarjetaBloqueadaComponent},
    { path: 'balance/:numeroTarjeta', component: BalanceComponent},
    { path: 'retiro/:numeroTarjeta', component: RetiroComponent},
    { path: 'resultado/:numeroTarjeta/:cantidadRetirada', component: ResultadoOperacionComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }