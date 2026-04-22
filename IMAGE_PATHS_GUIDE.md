// 📌 IMAGE PATHS CONFIGURATION

/*
 * ✅ Les images sont maintenant accessibles via le chemin COMPLET `/public/images/`
 * 
 * Exemple d'utilisation:
 * 
 * Dans un template HTML:
 * <img src="/public/images/logo.png" alt="Logo">
 * 
 * Ou avec ngSrc pour les performances:
 * <img [ngSrc]="'/public/images/logo.png'" alt="Logo" width="200" height="100">
 * 
 * Ou avec une variable TypeScript:
 * export class Component {
 *   logoUrl = '/public/images/logo.png';
 * }
 * 
 * <img [src]="logoUrl" alt="Logo">
 */

// 📌 STRUCTURE DES FICHIERS:
// public/
// ├── images/
// │   ├── logo.png
// │   ├── icon.png
// │   └── ...
// ├── vendor/
// │   ├── bootstrap-5.1.3-dist/
// │   ├── owl-carousel/
// │   └── ...
// └── manifest.webmanifest

// 📌 URLS ACCESSIBLES:
// http://localhost:4200/public/images/logo.png              ✅ URL COMPLÈTE
// http://localhost:4200/public/images/icon.png              ✅ URL COMPLÈTE
// http://localhost:4200/public/vendor/bootstrap.css         ✅ URL COMPLÈTE
// http://localhost:4200/public/manifest.webmanifest         ✅ URL COMPLÈTE

// 📌 ALIAS TYPESCRIPT:
// import { something } from '@app/...';         → src/app/
// import { something } from '@assets/...';      → src/assets/
// import { something } from '@env/...';         → src/environments/
// import { something } from '@public/...';      → public/


