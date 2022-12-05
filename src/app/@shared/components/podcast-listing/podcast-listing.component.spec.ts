import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { PodcastListingComponent } from './podcast-listing.component'
import * as MockPodcast from '@core/models/mocks/podcast.mock.json'

describe('@shared/PodcastListingComponent', () => {
  let component: PodcastListingComponent
  let fixture: ComponentFixture<PodcastListingComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastListingComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastListingComponent)

    component = fixture.componentInstance
    component.index = 0
    component.podcast = MockPodcast

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('viewPodcast()', () => {
    it('should return false', () => {
      var result = component.viewPodcast()
      expect(result).toBeFalse()
    })
  })
})
