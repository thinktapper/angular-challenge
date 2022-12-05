import { Component, Input, ViewEncapsulation } from '@angular/core'
import { Podcast } from '@core/models/podcast'

@Component({
  selector: 'podcast-listing',
  templateUrl: './podcast-listing.component.html',
  styleUrls: ['./podcast-listing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PodcastListingComponent {
  @Input('podcast') podcast!: Podcast
  @Input('index') index!: number
  @Input('podNum') podNum!: number

  constructor() {}

  viewPodcast() {
    return false
  }
}
