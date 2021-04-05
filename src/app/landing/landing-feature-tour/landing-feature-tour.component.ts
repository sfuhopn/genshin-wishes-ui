import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { interval, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-landing-feature-tour',
  templateUrl: './landing-feature-tour.component.html',
  styleUrls: ['./landing-feature-tour.component.scss'],
})
export class LandingFeatureTourComponent implements OnInit, OnDestroy {
  features: {
    icon?: IconProp;
    img: string;
    description: string;
  }[] = [
    {
      icon: 'chart-bar',
      img: 'assets/landing/dashboard.png',
      description: 'landing.feature.publicStats',
    },
    {
      icon: 'chart-pie',
      img: 'assets/landing/dashboard.png',
      description: 'landing.feature.personalStats',
    },
    {
      img: 'assets/landing/dashboard.png',
      description: 'landing.feature.dashboard',
    },
    {
      icon: 'archive',
      img: 'assets/landing/dashboard.png',
      description: 'landing.feature.archive',
    },
    {
      icon: 'laptop-house',
      img: 'assets/landing/dashboard.png',
      description: 'landing.feature.platforms',
    },
  ];

  current = 0;
  progress = 0;

  private _destroy = new Subject();
  reset$ = new Subject();

  ngOnInit(): void {
    this.reset$
      .pipe(
        tap(() => (this.progress = 0)),
        startWith(null),
        switchMap(() => interval(100)),
        map(() => (this.progress += 1)),
        takeUntil(this._destroy)
      )
      .subscribe((progress) => {
        if (progress >= 100) {
          this.progress = 0;
          this.current++;
          if (this.current >= this.features.length) this.current = 0;
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }
}
