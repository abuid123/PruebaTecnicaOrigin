import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarjeta } from 'src/app/models/tarjeta/tarjeta';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-resultado-operacion',
  templateUrl: './resultado-operacion.component.html',
  styleUrls: ['./resultado-operacion.component.css']
})
export class ResultadoOperacionComponent implements OnInit {
  numeroTarjeta:string = this.rutaActiva.snapshot.params['numeroTarjeta'];
  dineroRetirado:string = this.rutaActiva.snapshot.params['cantidadRetirada'];
  public tarjeta!: Tarjeta;
  constructor(private rutaActiva: ActivatedRoute,private apiServices:DataService) { }

  ngOnInit(): void {
    console.log(this.rutaActiva.snapshot.params)
    this.apiServices.getTarjeta(this.numeroTarjeta).subscribe(data=>{
      this.tarjeta = data;
    })
  }

}
