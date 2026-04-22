import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-mission-labo',
  imports: [],
  templateUrl: './mission-labo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionLaboComponent {

  public readonly images = APP_IMAGES;
}
