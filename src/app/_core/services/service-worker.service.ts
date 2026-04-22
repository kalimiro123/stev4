// 📌 Service Worker - Initialize and manage SW lifecycle
import { inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerService {
  private swUpdate = inject(SwUpdate);

  constructor() {
    this.initServiceWorker();
  }

  private initServiceWorker(): void {
    if (!environment.production) {
      console.log('🔧 Service Worker en development mode - non activé');
      return;
    }

    // Vérifier les mises à jour du service worker
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event) => {
        if (event.type === 'VERSION_READY') {
          console.log('✅ Nouvelle version disponible du service worker');
          this.promptUserToRefresh();
        }
      });

      // Vérifier les mises à jour périodiquement
      setInterval(() => {
        this.swUpdate.checkForUpdate();
      }, 1000 * 60 * 60); // Toutes les heures
    }
  }

  private promptUserToRefresh(): void {
    const message = 'Une nouvelle version est disponible. Rafraîchir la page?';
    if (confirm(message)) {
      window.location.reload();
    }
  }

  /**
   * Vérifier manuellement les mises à jour
   */
  checkForUpdates(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(() => {
        console.log('✅ Vérification des mises à jour effectuée');
      });
    }
  }

  /**
   * Activer les mises à jour disponibles
   */
  activateUpdate(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => {
        console.log('✅ Mise à jour activée');
        window.location.reload();
      });
    }
  }
}
