import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from '../../models/categoria';
@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [CategoriaService]
})
export class CategoriaComponent implements OnInit {

  public categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit():void{
    this.getAllCategorias();
  }

  /**
   * Permite traer toda la lista de categorias que existen
   */
  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((data: Categoria[]) =>{
      this.categorias = data;
    })
  }

}
