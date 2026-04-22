import { Component, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderBehaviorDirective } from './header-behavior.directive';
import { APP_IMAGES } from '../../../constantes/app-images';
import { MENU_ITEMS } from '@app/_core/constantes/app-menus';

declare global {
  interface Window {
    $: any;
  }
}

@Component({
  selector: 'app-header',
  styleUrls: ['./header.css'],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink, 
    HeaderBehaviorDirective, 
    RouterModule, 
    TranslateModule, 
    CommonModule
  ],
})
export class Header implements AfterViewInit {

  public readonly menusApp = MENU_ITEMS;
  public readonly images = APP_IMAGES;
  public currentLanguage = 'en';
  public languages = [
    { code: 'en', name: 'EN', flag: 'gb' },
    { code: 'fr', name: 'FR', flag: 'fr' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private translate: TranslateService
  ) {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    const savedLang = isPlatformBrowser(this.platformId)
      ? (localStorage.getItem('selectedLanguage') || 'en')
      : 'en';
    this.currentLanguage = savedLang;
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }

  public changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedLanguage', lang);
    }
  }

  ngAfterViewInit() {
    /*if (isPlatformBrowser(this.platformId)) {
      const checkJQuery = () => {
        if (typeof $ !== 'undefined') {
          /* Language dropdown //
          $('.language-dropdown .dropdown-toggle').off('click.lang').on('click.lang', function (e: any) {
            e.preventDefault();
            e.stopPropagation();
            const $dropdown = $(this).parent('.language-dropdown');
            $('.language-dropdown').not($dropdown).removeClass('show');
            $dropdown.toggleClass('show');
          });

          /* Contact dropdowns //
          $('.contact-icon').off('click').on('click', function (e: any) {
            e.preventDefault();
            e.stopPropagation();
            const $parent = $(this).closest('.contact-dropdown');
            $('.contact-dropdown').not($parent).removeClass('open');
            $('.contact-box').not($(this).next()).hide();
            $parent.toggleClass('open');
            $(this).next('.contact-box').toggle();
          });

          /* NAVBAR TOGGLER - PURE TOGGLE //
          $('.navbar-toggler').off('click.navbar').on('click.navbar', function (e: any) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Header toggler clicked');
            const $target = $('#mainMenu');
            $target.toggleClass('show');
            console.log('Toggle result:', $target.hasClass('show'));
          });

          /* Close on link click //
          $('.navbar-nav .nav-link').off('click.close').on('click.close', function () {
            $('.navbar-collapse').removeClass('show');
          });

          /* Close dropdowns outside //
          $(document).off('click.navbarclose').on('click.navbarclose', function (e: any) {
            if (!$(e.target).closest('.navbar, .dropdown, .contact-dropdown').length) {
              $('.navbar-collapse').removeClass('show');
              $('.dropdown').removeClass('show');
              $('.contact-dropdown').removeClass('open');
              $('.contact-box').hide();
            }
          });

          /* Sticky nav //
          $(window).off('scroll.header').on('scroll.header', function() {
            const scrollTop = $(this).scrollTop() || 0;
            if (scrollTop > 40) {
              $('.main-navbar').addClass('scrolled');
              $('.logo-light').addClass('d-none');
            } else {
              $('.main-navbar').removeClass('scrolled');
              $('.logo-light').removeClass('d-none');
            }
          });

        } else {
          setTimeout(checkJQuery, 100);
        }
      };
      checkJQuery();
    }*/
  }
}

