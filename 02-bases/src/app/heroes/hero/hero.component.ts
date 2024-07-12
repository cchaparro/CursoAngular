import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre: string = "cristian";
  public edad: number = 33;


  get capitalizedName(): string {
    return this.nombre.toLocaleUpperCase();
  }
  getHeroDescription(): string {
    return ` ${this.nombre}  -  ${this.edad}`;
  }

  changeHero(): void {
    this.nombre = "Alejandro";
  }

  changeEdad(): void {
    this.edad = 50;
  }

  reset(): void {
    this.edad = 33;
    this.nombre = "cristian";
  }



}
