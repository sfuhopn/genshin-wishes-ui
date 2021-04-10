import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { BaseComponent } from './core/base/base.component';
import { LandingCardComponent } from './core/landing/landing-card/landing-card.component';
import { NotAuthGuard } from './auth/not-auth.guard';
import { UrlSetupComponent } from './auth/url-setup/url-setup.component';
import { MihoyoLinkGuard } from './auth/mihoyo-link.guard';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [NotAuthGuard],
    canActivateChild: [NotAuthGuard],
    component: LandingComponent,
    children: [
      {
        path: 'login',
        component: AuthComponent,
      },
      // {
      //   path: '',
      //   component: LandingCardComponent,
      // },
    ],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'setup',
    canActivate: [MihoyoLinkGuard],
    component: UrlSetupComponent,
  },
  {
    path: 'login/oauth2/callback/:registrationId',
    component: AuthComponent,
  },
  { path: 'logout', component: LogoutComponent },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./gw-app/gw-app.module').then((m) => m.GwAppModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
