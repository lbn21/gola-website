import { Component, Input } from '@angular/core';
import {
  NgbActiveOffcanvas,
  NgbConfig,
  NgbOffcanvas,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-offcanvas-content',
  template: `
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Offcanvas</h5>
      <button
        type="button"
        class="btn-close text-reset"
        aria-label="Close"
        (click)="activeOffcanvas.dismiss('Cross click')"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>Hello {{ name }}</div>
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeOffcanvas.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
})
export class NgbdOffcanvasContentComponent {
  @Input() name = null;

  constructor(public activeOffcanvas: NgbActiveOffcanvas) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gola-website';

  constructor(ngbConfig: NgbConfig, private offcanvasService: NgbOffcanvas) {
    ngbConfig.animation = false;
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(
      NgbdOffcanvasContentComponent,
      { position: 'top' }
    );
    offcanvasRef.componentInstance.name = 'Gosia';
  }
}
