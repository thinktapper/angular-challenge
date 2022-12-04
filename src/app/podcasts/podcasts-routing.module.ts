import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PodcastListViewComponent } from "./list-view/podcast-list-view.component";

const routes: Routes = [
  {
    path: '',
    component: PodcastListViewComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PodcastsRoutingModule {}