import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-feature',
  templateUrl: './landing-feature.component.html',
  styleUrls: ['./landing-feature.component.scss'],
})
export class LandingFeatureComponent {
  @Input()
  img!: string;
  @Input()
  description!: string;
}
