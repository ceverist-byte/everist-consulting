// Display names for portal clients, keyed by URL slug. Shared by the login
// screen, the admin inventory, and the dynamic client/deliverable routes.
// Adding a client: add a slug here, a PORTAL_[SLUG]_PASSWORD env var, and a
// content folder with a client.json manifest under content/portal/[slug]/.
export const CLIENT_DISPLAY: Record<string, string> = {
  dempsey: 'Dempsey Construction',
  'clark-sd': 'Clark Construction',
};
