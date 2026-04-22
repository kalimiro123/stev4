import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '../../../constantes/app-images';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class Footer {
   public readonly images = APP_IMAGES;
}
