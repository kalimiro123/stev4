import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-programme-search',
  imports: [],
  templateUrl: './programme-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgrammeSearchComponent {

  public readonly images = APP_IMAGES;

}
