import { setRemoteDefinitions } from '@nx/angular/mf';
import type { WIMfManifest } from '@wi-mfes/config';
const getBaseUrl = (): string => {
  let elem = document.getElementsByTagName('wion-assets')[0];
  if (typeof elem != 'undefined' && elem != null) {
    return elem.getAttribute('data-assets') || '';
  }
  return '';
};
function isLocalHost() {
  return window.location.hostname == 'localhost';
}
function getAssetsUrl() {
  let url = 'module-federation.manifest.dev.json';
  if (!isLocalHost()) {
    url = 'module-federation.manifest.prod.json';
    let baseUrl = getBaseUrl();
    return `${baseUrl}${url}`;
  }
  return url;
}
fetch(getAssetsUrl())
  .then((res) => res.json())
  .then(async (manifest: WIMfManifest) => {
    console.log('Fetched manifest: ', manifest);
    // Extract URLs for Nx Module Federation
    const remoteUrls: Record<string, string> = {};
    Object.entries(manifest.remotes).forEach(
      ([name, config]: [string, any]) => {
        remoteUrls[name] = config.url;
      }
    );
    // Add baseUrl for non-local environments
    if (!isLocalHost()) {
      const baseUrl = getBaseUrl();
      Object.entries(remoteUrls).forEach(([name, url]) => {
        remoteUrls[name] = `${baseUrl}${url}`;
      });
    }
    // Set remote definitions for Nx Module Federation
    setRemoteDefinitions(remoteUrls);
    // Keep shared dependencies behind an async boundary. Module Federation
    // registers @wi-mfes/config as an asynchronously loaded shared module.
    const { setManifest } = await import('@wi-mfes/config');
    setManifest(manifest);
  })
  .then(() => {
    import('./bootstrap').catch((err) => console.error(err));
  })
  .catch((err) => {
    console.error('[Host] Failed to load manifest:', err);
    // Fallback: try to bootstrap anyway
    import('./bootstrap').catch((err) => console.error(err));
  });
