import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CadastroBaseService {

  private readonly apiUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }


  listar():Observable<any> {return this.http.get(this.apiUrl + 'cadastro').pipe(
    tap(cadastros =>console.log('Res lista cadastros', cadastros))
  );
  }

  adicionar(data: any): Observable<any> {
  console.log('Adicionar', data);
  return this.http.post(this.apiUrl + 'cadastro',data);
  }

  delete(id: number): Observable<any> {
    console.log('deletando', id)
    return this.http.delete(this.apiUrl + 'cadastro/'+id);
  }

  editar(id: string, data: any): Observable<any> {
    console.log('id',id);
    console.log('dados',data);
    return this.http.put(this.apiUrl+'cadastro/'+id,data);
  }

  buscar(id: number): Observable<any> {
    return this.http.get(this.apiUrl+'cadastro/'+id);
  }

}



