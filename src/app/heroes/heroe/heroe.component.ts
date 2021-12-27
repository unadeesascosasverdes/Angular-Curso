import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
    
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 50;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Pepe';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}