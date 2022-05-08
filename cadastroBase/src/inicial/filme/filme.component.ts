import { Component, Input, OnInit } from '@angular/core';
import { Filme } from './model/Filme';


@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  @Input()
  filme!:Filme;

  constructor() { }

  ngOnInit(): void {
  }

}
