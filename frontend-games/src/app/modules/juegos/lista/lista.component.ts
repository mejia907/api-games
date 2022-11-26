import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from '../services/lista.service';
import { PlatformPipe } from 'src/app/pipes/platform.pipe';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule,PlatformPipe],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [ListaService ]
})
export class ListaComponent implements OnInit {

  private categoria: string | undefined ;
  public juegos: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private listaService: ListaService
  ) { }

  ngOnInit(): void {
    this.categoria = this.activatedRoute.snapshot.paramMap.get('categoria')?.toUpperCase();
    this.getListaJuegos()
  }

  /**
   * Funcion que permite traer la lista de juegos de acuerdo la categoria seleccionada
   */
  getListaJuegos(){    
    this.listaService.getListaJuegosCategoria(this.categoria!).subscribe((data: any)=>{
      this.juegos= data;
    });
  }

}
