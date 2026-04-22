import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { TalksComponent } from '../componentswidgets/talks/talks.component';
import { TabsEventsComponent } from '../componentswidgets/tabs-events/tabs-events.component';
import { AnnualMeetingComponent } from '../componentswidgets/annual-meeting/annual-meeting.component';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-events',
  templateUrl: './events.html',
  styleUrls: ['./events.css'],  // ✅ CSS LOCAL
  encapsulation: ViewEncapsulation.None,  // Par défaut
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    TalksComponent,
    TabsEventsComponent,
    AnnualMeetingComponent
  ],
})
export default class Events {

  public readonly images = APP_IMAGES;

}
