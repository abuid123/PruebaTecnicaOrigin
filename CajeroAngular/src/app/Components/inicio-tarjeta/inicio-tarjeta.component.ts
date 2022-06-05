import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/models/tarjeta/tarjeta';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-inicio-tarjeta',
  templateUrl: './inicio-tarjeta.component.html',
  styleUrls: ['./inicio-tarjeta.component.css']
})
export class InicioTarjetaComponent implements OnInit {
  public numeroTarjeta:string;
  public tarjeta:Tarjeta | undefined;
  public answer_mode:number = 0;
  constructor(private apiServices: DataService) {
    this.numeroTarjeta = '';
   }

  ngOnInit(): void {
    //this.apiServices.getAllTarjetas().subscribe(data=> (this.tarjetas = data));
  }

  formatearTexto(tarjeta:string){
    if(this.numeroTarjeta.length > 15){
      return tarjeta.match(/(\d{4})/g)?.join('-');
    }
    return tarjeta;
  }


  verificarNumero(event:Event){
    event.preventDefault();
    this.apiServices.getTarjeta(this.numeroTarjeta).subscribe(
    data=>{
      if(data.bloqueada != true){
        this.tarjeta = data
        document.getElementById('enviarAPin')?.click();
        //redirecciono pagina exito y paso la tarjeta
      }else{
        //redirecciono pagina error
        document.getElementById('enviarAError')?.click();
      }
    },
    error=> {
      //redirecciono pagina error
      console.log(error.status);
      document.getElementById('enviarANoExiste')?.click();
    });
  }

  limpiar(){
    this.numeroTarjeta = '';
  }

  number(ch:number){
    this.numeroTarjeta += ch;
  }
}
