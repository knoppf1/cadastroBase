import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme/model/Filme';
import { InicialService } from '../inicial.service';


@Component({
  selector: 'app-inicial-view',
  templateUrl: './inicial-view.component.html',
  styleUrls: ['./inicial-view.component.scss']
})
export class InicialViewComponent implements OnInit {

  itens: any[] = [];
  error: string = '';
  filmes: any;


  constructor(
    private inicialService: InicialService,
  ) { }

  ngOnInit(): void {
    // this.load();
    // this.listarFilmes();
    this.listarFilmes1();
  }

  load(){
    console.log('Load');
    this.inicialService.listar().subscribe((res)=>{
      this.itens=res;
      console.log('Filmes', this.itens)
    })
  }

  // listarFilmes(): void {

  //   this.inicialService.listar1()
  //     .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  //     console.log('Testes',this.filmes)
  // }

  listarFilmes1(): void {

   this.inicialService.listar1()
      .subscribe((filmes) =>{
        this.filmes=filmes;
      console.log('Filmes', this.filmes)
      })

  }



}
