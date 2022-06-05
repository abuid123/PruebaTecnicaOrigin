import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarjeta } from 'src/app/models/tarjeta/tarjeta';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  numeroTarjeta:string = this.rutaActiva.snapshot.params['numeroTarjeta'];
  public tarjeta!: Tarjeta;
  constructor(private apiServices:DataService,private rutaActiva: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.apiServices.getTarjeta(this.numeroTarjeta).subscribe(data=>{
      this.tarjeta = data;
      this.apiServices.generarOperacion(this.tarjeta.id.toString(),'balance').subscribe(data=>{
        alert("Se ha generado un registro");
      },error=>alert("error"));
    })
  }

}
