import { Component, OnInit, Input } from '@angular/core';
import { MenubarModule, MenuItem } from 'primeng/primeng';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
  providers: [ MenuService ]
})
export class MainPanelComponent implements OnInit {
  @Input() tieneSideMenu: boolean;
  sidemenu: boolean;
  items: MenuItem[];
  username: string;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.sidemenu = this.tieneSideMenu;
    this.username = localStorage.getItem('username');
    this.items = this.menuService.getMenu();
    /*this.items = [
            {
                label: 'Correspondencia',
                icon: 'fa-envelope',
                items: [
                        {
                          label: 'Correlativos',
                          icon: 'fa-plus',
                          routerLink: ['/main/correlativos']
                        },
                        { label: 'Open' },
                        { label: 'Quit' }
                ]
            },
            {
                label: 'Configuracion',
                icon: 'fa-cog',
                items: [
                    { label: 'Oficinas', icon: 'fa-building-o', routerLink: ['/main/oficinas'] },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            }
      ];*/
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  }
}
