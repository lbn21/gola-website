import { Component } from '@angular/core';
import { NgbConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(ngbConfig: NgbConfig, private offcanvasService: NgbOffcanvas) {
    ngbConfig.animation = false;
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(MenuComponent, {
      position: 'top',
    });
  }
}
