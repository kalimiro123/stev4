import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-syringe',
  templateUrl: './syringe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class SyringeComponent {
  public readonly images = APP_IMAGES;

  // ── Syringe tabs ──
  activeTab: number = 0;

  selectTab(index: number): void {
    this.activeTab = index;
  }
}
