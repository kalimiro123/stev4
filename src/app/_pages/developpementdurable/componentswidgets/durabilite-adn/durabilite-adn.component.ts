import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-durabilite-adn',
  imports: [],
  templateUrl: './durabilite-adn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurabiliteADNComponent {

  public readonly images = APP_IMAGES;

}
