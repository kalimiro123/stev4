import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';
import { appConfigClient } from './app.config';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

class ServerTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    try {
      const filePath = join(process.cwd(), 'public/i18n', `${lang}.json`);
      const content = readFileSync(filePath, 'utf8');
      return of(JSON.parse(content));
    } catch {
      return of({});
    }
  }
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    { provide: TranslateLoader, useClass: ServerTranslateLoader },
  ]
};

export const config = mergeApplicationConfig(appConfigClient, serverConfig);
