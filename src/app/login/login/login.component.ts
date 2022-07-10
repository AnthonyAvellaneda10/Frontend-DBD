import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private titulo: Title) {
    titulo.setTitle('Login')
  }

  ngOnInit(): void {
  }

  registrate(){
    this.router.navigate(['registro']);
  }
  
}
