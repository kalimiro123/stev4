import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { APP_IMAGES } from '../../../constantes/app-images';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  public readonly images = APP_IMAGES;

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() pagetitle: string = '';
  @Input() imageLink: string = '';
  @Input() isNav: boolean = false;
}
