export class Tarjeta{
    id:number;
    numeroTarjeta:string;
    pin:number;
    balance:Float32Array;
    fechaVencimiento:Date;
    bloqueada:boolean;

    constructor(id:number,numeroTarjeta:string,pin:number,balance:Float32Array,fechaVencimiento:Date,bloqueada:boolean){
        this.id = id;
        this.numeroTarjeta = numeroTarjeta;
        this.pin = pin;
        this.balance = balance;
        this.fechaVencimiento = fechaVencimiento;
        this.bloqueada = bloqueada;
    }
}