import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  users: Usuario[] = [];

  constructor(public usuarioService : UsuarioService){} 

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    }) 
  }
}
