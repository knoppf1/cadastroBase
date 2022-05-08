import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from 'src/inicial/filme/model/Filme';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private readonly apiUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }


listar(): Observable<Filme[]> {return this.http.get<any>(this.apiUrl + 'favoritos');
      }
}
