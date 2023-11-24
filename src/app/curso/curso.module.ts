import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:  [CursoListComponent],
  declarations: [CursoListComponent, CursoDetailComponent]
})
export class CursoModule { }
