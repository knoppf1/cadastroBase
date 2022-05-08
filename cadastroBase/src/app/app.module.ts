
import { InicialModule } from './../inicial/inicial.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { CadastroBaseModule } from 'src/cadastro-base/cadastro-base.module';
import { FavoritosModule } from 'src/favoritos/favoritos.module';





@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FavoritosModule,

    CadastroBaseModule,
    InicialModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
