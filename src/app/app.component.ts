import { PLATFORM_ID, Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gola-website';

  constructor(
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    if (isPlatformBrowser(platformId)) {
      this.addGAScript();
      this.setUpAnalytics();
    }
  }

  addGAScript() {
    let script = this._renderer2.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.GA_TRACKING_ID}`;
    this._renderer2.insertBefore(
      this._document.head,
      script,
      this._document.head.firstChild
    );
    gtag('config', environment.GA_TRACKING_ID, { send_page_view: false });
  }

  setUpAnalytics() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects,
        });
      });
  }
}
