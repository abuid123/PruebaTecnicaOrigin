import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  numeroTarjeta:string = this.rutaActiva.snapshot.params['numeroTarjeta'];
  
  constructor(private rutaActiva: ActivatedRoute) { }


  ngOnInit(): void {
    console.log(this.numeroTarjeta);
  }

}
