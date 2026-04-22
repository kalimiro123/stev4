import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class HeroComponent {

  public readonly images = APP_IMAGES;
  
}
