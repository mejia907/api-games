import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/models/categoria';
import { Api } from 'src/static/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _urlAPI = Api.API_URL+'categoria'

  constructor( private http:HttpClient) { }

  /**
   * Permite consultar en la API la lista de categorias que existen
   * @returns JSON
   */
  public getAllCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this._urlAPI);
  }
  
}
