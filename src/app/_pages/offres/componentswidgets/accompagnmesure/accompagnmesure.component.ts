import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-accompagnmesure',
  templateUrl: './accompagnmesure.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class AccompagnmesureComponent {

  public readonly images = APP_IMAGES;

}
