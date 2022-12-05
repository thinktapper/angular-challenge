import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../@shared/shared.module'
import { NgxPaginationModule } from 'ngx-pagination'
import { PodcastListViewComponent } from './list-view/podcast-list-view.component'
import { PodcastsRoutingModule } from './podcasts-routing.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    PodcastsRoutingModule,
  ],
  declarations: [PodcastListViewComponent],
})
export class PodcastsModule {}
