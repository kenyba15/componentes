import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})

export class InicioPage implements OnInit {
//crear nuevo listado
//componentes: any[] = [];
componentes: Componente[] = [
  {
    icon: 'american-football-outline',
    name: 'Action Sheet',
    redirectTo: '/action-sheet'
  },
  {
    icon: 'alert-circle-outline',
    name: 'Alert',
    redirectTo: '/alert'
  },
  {
    icon: 'beaker-outline',
    name: 'Input',
    redirectTo: '/input'
  }
  ];
  constructor() { }
  ngOnInit() {
  
  }
}
