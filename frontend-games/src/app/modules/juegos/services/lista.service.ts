import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/static/api';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private _URLApi = Api.API_URL+'categoria';

  constructor(private http: HttpClient) { }

  /**
   * Permite consultar en la API la lista de videojuegos de acuerdo la categoria
   * @param categoria 
   * @returns JSON
   */
  public getListaJuegosCategoria(categoria: string){
    return this.http.get(this._URLApi+'/'+categoria);
  }
}
