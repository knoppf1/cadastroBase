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


}



