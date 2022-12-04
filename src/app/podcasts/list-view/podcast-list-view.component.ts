import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subscription } from "rxjs";
import { Podcast } from "@core/models/podcast";
import { PodcastService } from "@core/services/podcast.service";

@Component({
  selector: 'podcasts-list',
  templateUrl: './podcast-list-view.component.html',
  styleUrls: [ './podcast-list-view.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class PodcastListViewComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription;
  public podcasts: Podcast[] = [];

  constructor(
    private podcastService: PodcastService,
  ) {
    console.log('got here');
  }

  ngOnInit() {
    this.subscription.add(this.podcastService.getPodcastGenres().subscribe(genres => {
      if (genres.length > 0) {
        var webDesign = genres.filter(g => g.id == 140);
        if (webDesign.length > 0)
        {
          this.podcasts = webDesign[0].podcasts;
        }
      }
    }))
  }

  ngOnDestroy()
  {
    if (this.subscription)
    {
      this.subscription.unsubscribe();
    }
  }
}