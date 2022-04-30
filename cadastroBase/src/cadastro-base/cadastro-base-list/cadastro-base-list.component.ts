import { CadastroBaseService } from './../cadastro-base.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-base-list',
  templateUrl: './cadastro-base-list.component.html',
  styleUrls: ['./cadastro-base-list.component.scss']
})
export class CadastroBaseListComponent implements OnInit {

  itens: any[] = [];
  error: string = '';


  constructor(
    private cadastroBaseService: CadastroBaseService,
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    console.log('Load');
    this.cadastroBaseService.listar().subscribe((res)=>{
      this.itens=res;
    })
  }

  delete(id: number) {
    if(confirm('Você deseja excluir o resgitro?')){
      this.cadastroBaseService.delete(id).subscribe(res =>{
      this.load();
      });
    }
  }

}
