import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {

  public readonly images = APP_IMAGES;

}
