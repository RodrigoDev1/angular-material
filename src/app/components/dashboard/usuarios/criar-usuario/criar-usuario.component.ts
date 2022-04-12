import { Router } from '@angular/router';
import { UsuarioService } from './../../../../services/usuario.service';
import { Usuario } from './../../../../interfaces/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {

form: FormGroup;

  constructor(private fb: FormBuilder,
                      private _usuarioService: UsuarioService,
                      private router: Router,
                      private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario:['',Validators.required],
      nome:['',Validators.required],
      sexo:['',Validators.required],
      cidade:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  salvarUsuario(){

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nome: this.form.value.nome,
      sexo: this.form.value.sexo,
      cidade: this.form.value.cidade
    }

    this._usuarioService.salvarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open("Usuário Salvo com sucesso!",'',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

     })
  }

}
