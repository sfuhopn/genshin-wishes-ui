import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { BannerTypes } from '../../../api/genshin-wishes/constants';

@Component({
  selector: 'app-banner-nav',
  templateUrl: './banner-nav.component.html',
  styleUrls: ['./banner-nav.component.scss'],
})
export class BannerNavComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  menuTrigger!: MatMenuTrigger;

  @Output()
  filter = new EventEmitter<void>();

  @Input()
  allFirst = false;
  @Input()
  withFilters = true;

  banners: string[] = [];

  ngOnInit(): void {
    this.banners = this.allFirst
      ? ['ALL', ...BannerTypes]
      : [...BannerTypes, 'ALL'];
  }
}
