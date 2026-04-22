import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class BreadcrumbComponent {

  
  public readonly images = APP_IMAGES;

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() pagetitle: string = '';
  @Input() imageLink: string = '';
}
