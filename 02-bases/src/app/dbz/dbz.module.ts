import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponet } from './pages/main-page.component';



@NgModule({
  declarations: [MainPageComponet],
  imports: [
    CommonModule
  ], exports:[MainPageComponet]
})
export class DbzModule { }
