import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { DurabiliteADNComponent } from '../componentswidgets/durabilite-adn/durabilite-adn.component';
import { StrategieDurableComponent } from '../componentswidgets/strategie-durable/strategie-durable.component';
import { ContributionsocietalesComponent } from '../componentswidgets/contributionsocietales/contributionsocietales.component';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-developpement',
  templateUrl: './developpement.html',
  styleUrls: ['./developpement.css'],  // ✅ CSS LOCAL
  encapsulation: ViewEncapsulation.None,  // Par défaut
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    DurabiliteADNComponent,
    StrategieDurableComponent,
    ContributionsocietalesComponent
  ],
})
export default class Developpement {

  public readonly images = APP_IMAGES;
}
