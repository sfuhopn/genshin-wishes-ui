import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LandingMenuComponent } from '../landing-menu/landing-menu.component';

@Component({
  selector: 'app-landing-top',
  templateUrl: './landing-top.component.html',
  styleUrls: ['./landing-top.component.scss'],
})
export class LandingTopComponent {
  constructor(private _dialog: MatDialog) {}

  openMenu(): void {
    this._dialog.open(LandingMenuComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '100%',
      height: '100%',
      panelClass: 'no-radius-dialog',
    });
  }
}
