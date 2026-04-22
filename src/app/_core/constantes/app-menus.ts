import { router_app } from "./app-routes-enums";

export const MENU_ITEMS = [
  { id: 1, key: 'menu-expertise', route: `/${router_app.EXPERTISES}` },
  { id: 2, key: 'menu-offre', route: `/${router_app.OFFRES}` },
  { id: 3, key: 'menu-events', route: `/${router_app.EVENEMENTS}` },
  { id: 4, key: 'menu-agenda', route: `/${router_app.AGENDA}` },
  { id: 5, key: 'menu-research', route: `/${router_app.RESEARCHLAB}` },
  { id: 6, key: 'menu-developmentdurable', route: `/${router_app.DEVELOPPEMENTDURABLE}` },
  { id: 7, key: 'menu-politique', route: `/${router_app.POLITIQUES}` },
  { id: 8, key: 'menu-contact', route: `/${router_app.CONTACTS}` }
];
