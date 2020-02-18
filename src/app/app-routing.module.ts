import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'log-in', loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)},
  { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)},
  { path: 'location', loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)},
  { path: 'step-one', loadChildren: () => import('./step-one/step-one.module').then( m => m.StepOnePageModule)},
  { path: 'step-two', loadChildren: () => import('./step-two/step-two.module').then( m => m.StepTwoPageModule)},
  { path: 'step-three',loadChildren: () => import('./step-three/step-three.module').then( m => m.StepThreePageModule)},
  { path: 'search', loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)},
  { path: 'new', loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)},
  { path: 'event', loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)},
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)},
  { path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)},
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)},
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
