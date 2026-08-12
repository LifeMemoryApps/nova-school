NOVA SCHOOL V11.1 — CORRECTIF GITHUB PAGES

1. Décompresse ce ZIP.
2. Dans GitHub > nova-school > Add file > Upload files.
3. Envoie le CONTENU du dossier (index.html, manifest.json, sw.js, icons/).
4. Commit changes.
5. Ne change rien dans Settings > Pages.
6. Attends le déploiement GitHub Pages.
7. Sur PC : Ctrl+F5. Sur iPad : ferme complètement NOVA/Safari puis rouvre l'adresse.

Correctifs :
- suppression d'une boucle MutationObserver qui pouvait figer NOVA ;
- nouveau cache Service Worker v11.1 ;
- start_url PWA mis à jour ;
- navigation GitHub Pages sécurisée ;
- aucune modification du schéma IndexedDB : les données scolaires locales sont préservées.
