import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { FormContactComponent } from '../componentswidgets/form-contact/form-contact.component';
import { MapsComponent } from '../componentswidgets/maps/maps.component';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],  // ✅ CSS LOCAL
  encapsulation: ViewEncapsulation.Emulated,  // Par défaut
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    FormContactComponent,
    MapsComponent
  ],
})
export default class Contact {

  public readonly images = APP_IMAGES;

}
