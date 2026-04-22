import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-mission',
  imports: [],
  templateUrl: './mission.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionComponent {

  public readonly images = APP_IMAGES;

}
