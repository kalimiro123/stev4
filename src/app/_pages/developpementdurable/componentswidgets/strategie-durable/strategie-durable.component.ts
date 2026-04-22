import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-strategie-durable',
  templateUrl: './strategie-durable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class StrategieDurableComponent {

  public readonly images = APP_IMAGES;

}
