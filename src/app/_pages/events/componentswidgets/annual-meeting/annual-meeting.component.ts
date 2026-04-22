import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-annual-meeting',
  templateUrl: './annual-meeting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class AnnualMeetingComponent {

  public readonly images = APP_IMAGES;

}
