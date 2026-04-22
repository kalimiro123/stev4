import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-experienceperso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experienceperso.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencepersoComponent {

  public readonly images = APP_IMAGES;

}
