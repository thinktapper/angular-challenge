import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/podcasts/podcasts.module').then(m => m.PodcastsModule),
  },
  {
    path: 'podcasts',
    loadChildren: () => import('src/app/podcasts/podcasts.module').then(m => m.PodcastsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
