import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: 'logo.component.html',
  styleUrls: ['logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() primary: boolean = false;
  @Input() responsive: boolean = false;
  @Input() height: number = 30;
  width: number = 0;
  private aspectRatio = 2.6235;

  ngOnInit() {
    this.width = this.height * this.aspectRatio;
  }
}
