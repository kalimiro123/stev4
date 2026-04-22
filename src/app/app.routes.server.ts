import { RenderMode, ServerRoute } from '@angular/ssr';
import { router_app } from './_core/constantes/app-routes-enums';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: router_app.HOME,
    renderMode: RenderMode.Prerender,
  },
  {
    path: router_app.EXPERTISES,
    renderMode: RenderMode.Prerender,
  },
  {
    path: router_app.EVENEMENTS,
    renderMode: RenderMode.Prerender,
  },
  {
    path: router_app.AGENDA,
    renderMode: RenderMode.Prerender,
  },
  {
    path: router_app.RESEARCHLAB,
    renderMode: RenderMode.Prerender,
  },
  {
    path: router_app.DEVELOPPEMENTDURABLE,
    renderMode: RenderMode.Prerender,
  },
  {
    path: router_app.POLITIQUES,
    renderMode: RenderMode.Prerender,
  },
  {
    path: router_app.CONTACTS,
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
