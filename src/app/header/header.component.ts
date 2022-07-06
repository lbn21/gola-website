import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { right } from '@popperjs/core';

import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  open() {
    const offcanvasRef = this.offcanvasService.open(MenuComponent, {
      position: 'top',
      animation: false,
      panelClass: 'menu-panel',
    });
  }
}
