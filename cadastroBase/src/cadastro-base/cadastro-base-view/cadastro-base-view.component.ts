import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr'
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
  submitted: boolean = false;
  erro: string;

  constructor(
    private cadastroBaseService: CadastroBaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
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
     nome : ['',Validators.minLength(5)],
     email : ['',Validators.email],
     cpf : ['',Validators.minLength(11)],
     dataNascimento : ['',Validators.required],
     idade : [{ value: '', disabled: true },Validators.min(18)],
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

  save(_$event: any) {

    this.toastr.clear();
    // Cálculo da idade
    var anoAtual = new Date().getFullYear();
    var ano_informado = Number(this.frmForm.value.dataNascimento.split('/')[2]);
    var idade = (anoAtual - ano_informado);
    this.frmForm.value.idade = idade;

    if(this.frmForm.value.idade > 18){
      if(this.id != 0){
        this.cadastroBaseService.editar(this.id, this.frmForm.value).subscribe(res =>{
        });
      }
      else{
        this.cadastroBaseService.adicionar(this.frmForm.value).subscribe(res =>{
        });
      }
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['list']));
    }else{
      console.log("Menor de idade!");
      this.toastr.warning('VERIFIQUE A IDADE!');
    }

  }

}







