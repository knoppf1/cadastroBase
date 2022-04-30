import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CadastroBaseService } from '../cadastro-base.service';

@Component({
  selector: 'app-cadastro-base-view',
  templateUrl: './cadastro-base-view.component.html',
  styleUrls: ['./cadastro-base-view.component.scss'],
})

export class CadastroBaseViewComponent implements OnInit {
  id: any= "";
  frmForm: FormGroup;

  constructor(
    private cadastroBaseService: CadastroBaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.frmForm = this.createForm();
    if(this.id == 0){
      console.log('This id2', this.id);
    }else{
      this.load();
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
     nome : ['',Validators.required],
     email : ['',Validators.required],
     cpf : ['',Validators.required],
     dataNascimento : ['',Validators.required],
     idade : ['',Validators.required],
    });
 }

 get f() {
  return this.frmForm.controls;
 }

 load(){
  this.cadastroBaseService.buscar(this.id).subscribe(res =>{
    this.frmForm.patchValue(res);
  });
 }

 save1(_$event: any) {
    console.log('Salvar',this.frmForm.value);
    this.cadastroBaseService.adicionar(this.frmForm.value).subscribe(res =>{
    });
  }


  save(_$event: any) {
    if(this.id != 0){
      this.cadastroBaseService.editar(this.id, this.frmForm.value).subscribe(res =>{
      });
    }
    else{
      this.cadastroBaseService.adicionar(this.frmForm.value).subscribe(res =>{
      }
      );
    }
  }

}







