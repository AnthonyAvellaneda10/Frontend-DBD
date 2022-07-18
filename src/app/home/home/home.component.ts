import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titulo: Title, public dataService: DataService) { 
    titulo.setTitle('Sistema de Transporte')
  }
  ngOnInit(): void {
  }

}
