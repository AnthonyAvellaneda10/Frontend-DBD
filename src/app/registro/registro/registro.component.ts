import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private titulo: Title) { 
    titulo.setTitle('Registro de Usuario')
  }

  ngOnInit(): void {
  }
  iniciaSesion(){
    this.router.navigate(['login']);
  }

}
