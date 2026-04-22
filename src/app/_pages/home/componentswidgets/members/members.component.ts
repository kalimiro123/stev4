import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { APP_IMAGES } from '@app/_core/constantes/app-images';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class MembersComponent {

  public readonly images = APP_IMAGES;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return; // 🚫 SSR: do nothing
    }
  
    this.initProfileModal();
  }

  initProfileModal() {

    const elements = document.querySelectorAll('.profile-trigger');
  
    elements.forEach((el: any) => {
      el.addEventListener('click', () => {
  
        const img = el.getAttribute('data-img');
        const name = el.getAttribute('data-name');
        const role = el.getAttribute('data-role');
        const bio = el.getAttribute('data-bio');
        const country = el.getAttribute('data-country');
        const flag = el.getAttribute('data-flag');
  
        const modalImg = document.querySelector('.modal-img') as HTMLImageElement;
        const modalName = document.querySelector('.modal-name') as HTMLElement;
        const modalRole = document.querySelector('.modal-role') as HTMLElement;
        const modalBio = document.querySelector('.modal-bio') as HTMLElement;
        const modalCountry = document.querySelector('.modal-country') as HTMLElement;
  
        if (modalImg) modalImg.src = img;
        if (modalName) modalName.textContent = name;
        if (modalRole) modalRole.textContent = role;
        if (modalBio) modalBio.textContent = bio;
        if (modalCountry) {
          modalCountry.innerHTML = `<img src="${flag}" width="22"> ${country}`;
        }
  
        const modalEl = document.getElementById('profileModal');
  
        if (modalEl && (window as any).bootstrap) {
          const modal = new (window as any).bootstrap.Modal(modalEl);
          modal.show();
        }
  
      });
    });
  }
}
