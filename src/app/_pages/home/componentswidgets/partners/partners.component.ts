import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CarouselModule],
})
export class PartnersComponent {

  public readonly images = APP_IMAGES;

  partnersOptions = {
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    smartSpeed: 600,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 5 },
      1200: { items: 6 }
    }
  };

}
