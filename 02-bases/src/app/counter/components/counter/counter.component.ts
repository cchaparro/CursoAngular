import { Component } from "@angular/core";

@Component({
    selector: 'app-counte',
    templateUrl:'counter.component.html'
})
export class CounterComponet {
    public title: string = 'Hola cristian';
    public counter: number = 0;
  
    increseBy(value: number): void {
      this.counter += value;
  
    }
  
    decreseBy(value: number): void {
      this.counter -= value;
  
    }
  
    reset(): void {
      this.counter = 0;
  
    }
}

