import { UsuarioService } from './../../../services/usuario.service';
import { Usuario } from './../../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

 listUsuarios: Usuario[]=[];


  displayedColumns: string[] = ['Usuário', 'Nome', 'Sexo', 'Cidade','action'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _usuarioService: UsuarioService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.carregarUsuario();
  }

  carregarUsuario(){
    this.listUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index:number){
    console.log(index);
    this._usuarioService.eliminarUsuario(index);
    this.carregarUsuario();

    this._snackBar.open("Usuário eliminado com sucesso!",'',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',

     })
  }

}
