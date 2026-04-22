import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class TalksComponent {

  public readonly images = APP_IMAGES;

}
