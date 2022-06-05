import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ingresar-pin',
  templateUrl: './ingresar-pin.component.html',
  styleUrls: ['./ingresar-pin.component.css']
})
export class IngresarPinComponent implements OnInit {
  public numeroTarjeta:string = this.rutaActiva.snapshot.params['numeroTarjeta'];
  public pinTarjeta:string = '';
  public intento:number = 0;

  constructor(private apiServices:DataService,private rutaActiva: ActivatedRoute){
  }

  ngOnInit(): void {
  }

  verificarNumero(event:Event){
    event.preventDefault();
    this.apiServices.confirmarPin(this.pinTarjeta,this.numeroTarjeta).subscribe(
    data=>{
      document.getElementById('enviarAOperaciones')?.click();
    },
    error=> {
      this.intento++;
      if(4-this.intento != 0){
        alert('Pin incorrecto le quedan: ' + (4-this.intento) + ' intentos.');
      }else{
        this.apiServices.bloquearTarjeta(this.numeroTarjeta).subscribe(data=>{
          document.getElementById('enviarABloqueada')?.click();
        });
      }
    });
  }

  salir(){
    document.getElementById('salir')?.click();
  }

  limpiar(){
    this.pinTarjeta = '';
  }

  number(ch:number){
    this.pinTarjeta += ch;
  }
}
