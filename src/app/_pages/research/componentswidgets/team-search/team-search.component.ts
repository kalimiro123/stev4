import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-team-search',
  imports: [],
  templateUrl: './team-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamSearchComponent {

  public readonly images = APP_IMAGES;

}
