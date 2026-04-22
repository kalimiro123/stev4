import { Routes } from '@angular/router';
import { router_app } from './_core/constantes/app-routes-enums';

export const routes: Routes = [
	{
		path: '',
		redirectTo: router_app.HOME,
		pathMatch: 'full',
	},
	{
		path: router_app.HOME,
		loadComponent: () => import('./_pages/home/components/home'),
		pathMatch: 'full',
		title: 'Accueil',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: router_app.EXPERTISES,
		loadComponent: () => import('./_pages/expertise/components/expertise'),
		title: 'Expertises',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: router_app.OFFRES,
		loadComponent: () => import('./_pages/offres/components/offre'),
		title: 'Offres',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: router_app.EVENEMENTS,
		loadComponent: () => import('./_pages/events/components/events'),
		title: 'Événements',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: router_app.AGENDA,
		loadComponent: () => import('./_pages/agenda/components/agenda'),
		title: 'Agenda',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: router_app.RESEARCHLAB,
		loadComponent: () => import('./_pages/research/components/research'),
		title: 'Research Lab',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: router_app.DEVELOPPEMENTDURABLE,
		loadComponent: () => import('./_pages/developpementdurable/components/developpement'),
		title: 'Développement',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: router_app.POLITIQUES,
		loadComponent: () => import('./_pages/politique/components/politique'),
		title: 'Politiques',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: router_app.CONTACTS,
		loadComponent: () => import('./_pages/contact/components/contact'),
		title: 'Contact',
		data: {
			preload: true, // Indique que cette route doit être préchargée
		}
	},
	{
		path: '**',
		redirectTo: '',
	},
];
