import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../curso';
import { CursoDetail } from '../cursoDetail';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  certificated: number[]=[];
  cursos: Array<Curso>=[]
  selectedCurso!: Curso;
  selected: Boolean = false;

  constructor(private cursoService: CursoService) { }
  getCursos(): void {
    this.cursoService.getCursos().subscribe((cursos) => {
        this.cursos=cursos;
        this.CursoCertificated(cursos);
      }
    );
  }

  CursoCertificated(curso: any[]): void {
    this.certificated=curso.filter(c => c.offers_certificate).map(c => c.id);
  }
  onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  ngOnInit() {
    this.getCursos();
  
  }

}
