import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-orientation-report',
  templateUrl: './orientation-report.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class OrientationReportComponent {

  public readonly images = APP_IMAGES;

}
