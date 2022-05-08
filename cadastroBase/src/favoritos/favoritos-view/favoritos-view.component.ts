import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';


@Component({
  selector: 'app-favoritos-view',
  templateUrl: './favoritos-view.component.html',
  styleUrls: ['./favoritos-view.component.scss']
})
export class FavoritosViewComponent implements OnInit {
  favoritos: any;
  filme: any;
  favoritar = false;
  id: any= "";
  titulo: any= "";
  preco: any= "";

  constructor(
    private favoritosService: FavoritosService,
  ) { }

  ngOnInit(): void {
        this.listarFavoritos();
  }

  listarFavoritos(): void {

    this.favoritosService.listar()
       .subscribe((filmes) =>{
         this.favoritos=filmes;
       console.log('Favoritos', this.favoritos)
       })

   }

  adicionarcompras(_$event: any) {
            this.favoritosService.adicionarcompras(this.id).subscribe(res =>{
            });
      }


}
