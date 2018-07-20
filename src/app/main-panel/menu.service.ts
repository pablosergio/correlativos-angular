import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {
  constructor(private jwtHelper: JwtHelper) { }

  getMenu(): any[] {
    const token = localStorage.getItem('token');
    const menu = this.jwtHelper.decodeToken(token).menu;
    return this.construirMenu(menu);
  }

  construirMenu(menu): any[] {
    const menuPrincipal = [];
    for (const opcion of menu) {
      if (opcion.estado === 'ACTIVO') {
        const item = {
          label: null,
          icon: null,
          routerLink: [],
          items: []
        };
        item['label'] = opcion.opcion;
        item['icon'] = opcion.icono;
        item['routerLink'] = opcion.href ? [opcion.href] : null;
        item['icon'] = opcion.icono;
        item['items'] = opcion.submenu ? this.construirMenu(opcion.submenu) : null;
        menuPrincipal.push(item);
      }
    }
    return menuPrincipal;
  }
}
