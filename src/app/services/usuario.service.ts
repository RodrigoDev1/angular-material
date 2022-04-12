import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'Padrão', nome:'Rodrigo', sexo:'Masculino', cidade: 'Recife'},
    {usuario: 'padrão', nome: 'Priscila', sexo: 'Feminino', cidade: 'Recife'},
    {usuario: 'padrão', nome: 'Samara', sexo:'Feminino', cidade: 'Recife'},
    {usuario: 'padrão', nome: 'Betânia', sexo: 'Feminino', cidade: 'Recife'},
    {usuario: 'padrão', nome: 'Mizael', sexo: 'Masculino', cidade:'Recife'},
    {usuario: 'padrão', nome: 'Jhonatas', sexo: 'Masculino', cidade: 'Paulista'},
    {usuario: 'padrão', nome: 'Anthony', sexo: 'Masculino', cidade: 'Paulista'},
    {usuario: 'padrão', nome: 'Poliana', sexo: 'Feminino', cidade: 'Paulista'},
    {usuario: 'padrão', nome: 'Addamys', sexo: 'Masculino', cidade: 'Paulista'},
    {usuario: 'padrão', nome: 'João', sexo: 'Masculino', cidade: 'Petrolina'},
    {usuario: 'padrão', nome: 'Alexandre', sexo: 'Masculino', cidade: 'Natal'}

  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index, 1);

  }
  salvarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
