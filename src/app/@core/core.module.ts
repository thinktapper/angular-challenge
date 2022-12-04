import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { PodcastService } from "./services/podcast.service";

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        PodcastService
      ]
    }
  }
}