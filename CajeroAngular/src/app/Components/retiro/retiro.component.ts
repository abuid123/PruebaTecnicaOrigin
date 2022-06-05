import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarjeta } from 'src/app/models/tarjeta/tarjeta';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
  public dineroRetirar:string;
  public numeroTarjeta:string = this.rutaActiva.snapshot.params['numeroTarjeta'];
  public tarjeta!: Tarjeta;
  constructor(private apiServices: DataService, private rutaActiva: ActivatedRoute) {
    this.dineroRetirar = '';
   }

  ngOnInit(): void {
    this.apiServices.getTarjeta(this.numeroTarjeta).subscribe(data=>{
      this.tarjeta = data;
    })
  }

  retirarDinero(event:Event){
    this.apiServices.retirarDinero(this.dineroRetirar,this.numeroTarjeta).subscribe(data=>{
      this.apiServices.generarOperacion(this.tarjeta.id.toString(),'retiro',this.dineroRetirar).subscribe(data=>{
        alert("Se ha generado un registro de la operacion");
      },error =>{
        alert("Error");
      });
      document.getElementById('irResultado')?.click();
    },error=>{
      if(error.error.title == 'Bad Request'){
        alert('Exedio la cantidad de dinero');
      }
    });
  }

  limpiar(){
    this.dineroRetirar = '';
  }

  number(ch:number){
    this.dineroRetirar += ch;
  }
}
