import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { InicioTarjetaComponent } from './Components/inicio-tarjeta/inicio-tarjeta.component';
import { IngresarPinComponent } from './Components/ingresar-pin/ingresar-pin.component';
import { ErrorComponent } from './Components/error/error.component';
import { OperacionesComponent } from './Components/operaciones/operaciones.component';
import { ErrorNotFoundComponent } from './Components/error-not-found/error-not-found.component';
import { TarjetaBloqueadaComponent } from './Components/tarjeta-bloqueada/tarjeta-bloqueada.component';
import { BalanceComponent } from './Components/balance/balance.component';
import { RetiroComponent } from './Components/retiro/retiro.component';
import { ResultadoOperacionComponent } from './Components/resultado-operacion/resultado-operacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioTarjetaComponent,
    IngresarPinComponent,
    ErrorComponent,
    OperacionesComponent,
    ErrorNotFoundComponent,
    TarjetaBloqueadaComponent,
    BalanceComponent,
    RetiroComponent,
    ResultadoOperacionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
