import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-leadership-t',
  templateUrl: './leadership-t.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class LeadershipTComponent {
  public readonly images = APP_IMAGES;
  // ── Cercle tab ──
  public activeSlice: number = 1;
  public selectSlice(index: number): void {
    this.activeSlice = index;
  }
}
