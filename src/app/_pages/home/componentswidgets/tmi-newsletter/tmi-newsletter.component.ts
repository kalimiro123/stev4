import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-tmi-newsletter',
  templateUrl: './tmi-newsletter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class TmiNewsletterComponent {

  public readonly images = APP_IMAGES;

}
