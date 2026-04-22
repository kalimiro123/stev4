import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-help-section',
  standalone: true,
  templateUrl: './help-section.component.html',
})
export class HelpSectionComponent {

  public readonly images = APP_IMAGES;
}
