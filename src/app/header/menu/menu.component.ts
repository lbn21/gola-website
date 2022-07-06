import { Component } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    public activeOffcanvas: NgbActiveOffcanvas,
    private router: Router
  ) {}

  navigate(path: string) {
    this.router.navigate([path]);
    this.activeOffcanvas.close();
  }
}
