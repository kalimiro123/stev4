import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class IdentityComponent {
   public readonly images = APP_IMAGES;
}
