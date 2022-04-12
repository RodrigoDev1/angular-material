import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuário: ['', Validators.required],
      senha: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  Acessar(){

    const usuário = this.form.value.usuário;
    const senha = this.form.value.senha;

    if(usuário == 'Rodrigo' && senha == '123456'){
      // redireciona ao dashboard
      this.fakeLoading();
    } else{
      this.error();
      this.form.reset();
    }
  }
  error(){
    this._snackBar.open("Usuário ou senha inválida!",'',{
     duration: 5000,
     horizontalPosition: 'center',
     verticalPosition: 'bottom',

    })

  }
  fakeLoading(){
    this.loading = true;

    setTimeout(() => {

      this.router.navigate(['dashboard']);
    }, 1500);
  }

}
