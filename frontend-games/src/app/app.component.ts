import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Categoria } from './models/categoria';
import { CategoriaService } from './modules/categoria/services/categoria.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoriaService]
})

export class AppComponent implements OnInit{
  
  public categorias: Categoria[] = [];
  
  constructor(
    private categoriaService: CategoriaService
  ){}

  ngOnInit():void{
    this.getAllCategorias();
  }

  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((data: Categoria[]) =>{
      this.categorias = data;

    })
  }
}
