import { Injectable } from '@angular/core';
import { Tarjeta } from 'src/app/models/tarjeta/tarjeta';
import { Observable } from 'rxjs';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private urlApi = 'https://localhost:44305/api/';

  constructor(private http: HttpClient) { }

  /*getAllTarjetas():Observable<Tarjeta[]>{
    return this.http.get<Tarjeta[]>(this.urlApi + 'Tarjeta');
  }*/

  getTarjeta(numeroTarjeta:string):Observable<Tarjeta>{
    return this.http.get<Tarjeta>(this.urlApi + 'Tarjeta/' + numeroTarjeta);
  }

  bloquearTarjeta(numeroTarjeta: string) {
    let param = {
      "numeroTarjeta":numeroTarjeta
    }
    return this.http.post(this.urlApi + 'Tarjeta/' ,param );
  }

  confirmarPin(numeroPin:string, numeroTarjeta:string):Observable<Tarjeta>{
    let param = {
      "Pin":numeroPin,
      "numeroTarjeta":numeroTarjeta
    }
    return this.http.post<Tarjeta>(this.urlApi + 'Tarjeta/ChequearPin', param);
  }

  retirarDinero(dineroRetirar: string, numeroTarjeta: string) {
    let param = {
      "Balance":dineroRetirar,
      "numeroTarjeta":numeroTarjeta
    }
    return this.http.post(this.urlApi + 'Tarjeta/RetirarDinero', param);
  }

  generarOperacion(idTarjeta:string, operacion:string, dinero:string = '0'){
    let idOperacion:string = '';
    switch (operacion) {
      case 'retiro':
        idOperacion ='2';
        break;
      case 'balance':
        idOperacion = '1';
        break;
    }
    let param = {
      "IdOperacion":idOperacion,
      "CreationDate": new Date(),
      "IdTarjeta":idTarjeta,
      "CantidadDinero":dinero
    }

    return this.http.post(this.urlApi + 'OperacionTarjeta', param);
  }
}
