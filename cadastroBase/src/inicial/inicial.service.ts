import { Filme } from './filme/model/Filme';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicialService {

  private readonly apiUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }


listar1(): Observable<Filme[]> {return this.http.get<any>(this.apiUrl + 'filmes');
      }

      listar2(): Observable<Filme[]> {return this.http.get<Filme[]>(this.apiUrl + 'filmes');
    }

  listar():Observable<any> {return this.http.get(this.apiUrl + 'filmes').pipe(
    tap(filmes =>console.log('Res lista filmes', filmes))
  );
  }

  adicionar(data: any): Observable<any> {
  console.log('Adicionar', data);
  return this.http.post(this.apiUrl + 'filmes',data);
  }

  delete(id: number): Observable<any> {
    console.log('deletando', id)
    return this.http.delete(this.apiUrl + 'filmes/'+id);
  }

  editar(id: string, data: any): Observable<any> {
    console.log('id',id);
    console.log('dados',data);
    return this.http.put(this.apiUrl+'filmes/'+id,data);
  }

  buscar(id: number): Observable<any> {
    return this.http.get(this.apiUrl+'filmes/'+id);
  }
}
