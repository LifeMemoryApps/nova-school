# NOVA School — Editor Premium V3

Cette version conserve la base IndexedDB/PWA de la V2 et refond l'expérience Cahiers.

## Ajouts principaux
- Mode plein écran / immersif (bouton ⛶, Échap pour quitter, Ctrl+Shift+F).
- Feuille logique A4 900×1273 avec workspace centré.
- Zoom 50–200 % et ajustement à la page.
- Images ajoutables depuis le bouton Image ou par glisser-déposer.
- Images persistantes dans la note, déplaçables, redimensionnables, duplicables et supprimables.
- Zones de texte libres persistantes.
- Post-it persistants.
- Styles scolaires : Titre, Sous-titre, Définition, Exemple, À retenir.
- Toolbar plus riche et contextuelle dans l'esprit NOVA.
- Dessin souris/tactile/stylet, réglage d'épaisseur, 6 couleurs.
- Surligneur, gomme par trait, annulation et effacement du dessin.
- Correction du rendu des traits : seul le nouveau segment est dessiné pendant pointermove.
- Coordonnées du dessin converties vers le repère logique de la feuille pour rester alignées avec le zoom.
- Gestion des pages repliable et cartes cahiers plus compactes.
- Suppression d'une grande partie des doubles scrollbars : le workspace devient la zone de scroll principale.
- Autosave des textes, dessins et objets libres.

## Démarrage
Cette version utilise les modules JavaScript ES. Évite le double-clic direct sur index.html.
Sous Windows, lance `START_NOVA.bat`, ou utilise VS Code + Live Server.

## Encore à développer
Le lasso multi-objets avancé, les formes géométriques complètes, PDF multipage, OCR, scanner avec correction de perspective, audio synchronisé et IA réelle restent des étapes suivantes.

## V4 — Workspace unifié
- Scanner une feuille directement depuis le cours et l'utiliser comme fond annotable.
- Importer la première page d'un PDF directement dans le cours.
- Écrire, ajouter des zones de texte et dessiner au-dessus du document sans quitter l'éditeur.
- Exporter la page courante en PDF A4.
- Partager le PDF via la feuille de partage du système quand elle accepte les fichiers (Android notamment) ; sinon NOVA télécharge le PDF puis ouvre la messagerie. Un navigateur web ne peut pas joindre silencieusement un fichier à `mailto:` sans backend.
