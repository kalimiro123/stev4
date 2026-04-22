import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { GouvernanceComponent } from '../componentswidgets/gouvernance/gouvernance.component';
import { StrategieComponent } from '../componentswidgets/strategie/strategie.component';
import { TimelineComponent } from '../componentswidgets/timeline/timeline.component';
import { SyringeComponent } from '../componentswidgets/syringe/syringe.component';
import { ManagehumainComponent } from '../componentswidgets/managehumain/managehumain.component';
import { LeadershipTComponent } from '../componentswidgets/leadership-t/leadership-t.component';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.html',
  styleUrls: ['./expertise.css'],  // ✅ CSS LOCAL
  encapsulation: ViewEncapsulation.None,  // Par défaut
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule,
    BreadcrumbComponent,
    GouvernanceComponent,
    StrategieComponent,
    TimelineComponent,
    SyringeComponent,
    ManagehumainComponent,
    LeadershipTComponent
  ],
})
export default class Expertise {

  public readonly images = APP_IMAGES;

}