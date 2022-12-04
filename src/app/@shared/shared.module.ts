import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedRoutingModule } from "@shared/shared-routing.module";
import { PodcastListingComponent } from "./components/podcast-listing/podcast-listing.component";

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    PodcastListingComponent,
  ],
  exports: [
    PodcastListingComponent,
  ],
})
export class SharedModule { }