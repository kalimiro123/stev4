
------------------------------------------------------------------------------
## header
1-supprimer le fichier .css (a remplacer sur le css globale ou ficchié dédié)
le scroll down ne marche pas

------------------------------------------------------------------------------
## footer
1-supprimer le fichier .css (a remplacer sur le css globale ou ficchié dédié)

------------------------------------------------------------------------------
## in all IMPORTANT !!!!!!!!!!!!!!!!!!!!

1-ne pas mettre href="#" dans les liens, ca fait buger
2-ajouter des aria-label pour l'accessibilité
3-ajouter des alt text pour les images
4-sur les lien des reseau sociaux ajouter target="_blank" et rel="noopener noreferrer" pour la sécurité
5-eliminé materiel design nous on travail avec bootstrap5
6-netoie des balises html vide (<img src="">, <h5></h5>, <p></p> etc...)
7-formate le code html pour qu'il soit plus lisible (HTML, CSS, TS)
8-les appell du font soit on le met sur index.html ou style.css (pas les deux)

------------------------------------------------------------------------------
## Solution provisoir CSS in page dédié :

dans le TS :
styleUrls: ['./home.css'],  // ✅ CSS LOCAL
encapsulation: ViewEncapsulation.Emulated,  // Par défaut

dans le CSS :
@import '../../../../../public/css/home.css'; 

ne jamais mettre link sur les composant HTML

------------------------------------------------------------------------------
## index.html

<!-- jQuery CDN - FIX for profileModal (A supprimer n'ajoute plus des bibliotheque depuis index toujours sur style) -->
<!--script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script-->
  
<!-- Recupéré font-awesome local et le mettre sur public/css ou creer public/icones -->
et mettre le lien sur angular.json dans les styles globales
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" rel="stylesheet" />
  

------------------------------------------------------------------------------
## HOME PAGE (/home)

1-Board Members => les tabs sont pas bien afficher je parle juste du design

=> fait un dernier retour sur le design pour que ce soit identique a la maquette 
(les icones, les couleurs, les polices, les espacements etc...)

------------------------------------------------------------------------------
## EXPERTISE PAGE (/expertise)

1-Les Tabs non stylé
2-Leadership Transformatif les icon a revoir
3-Transformation de la culture managériale a revoir pour qu'il soit identique au maquette

=> fait un dernier retour sur le design pour que ce soit identique a la maquette 
(les icones, les couleurs, les polices, les espacements etc...)

------------------------------------------------------------------------------
## OFFRES PAGE (/offres)
1-Originalité De Nos MasterClasses => a revoir
2-Types des MasterClasses => a revoir (design, tab on/off)

=> fait un dernier retour sur le design pour que ce soit identique a la maquette 
(les icones, les couleurs, les polices, les espacements etc...)

------------------------------------------------------------------------------
## EVENTS PAGE (/evenements)

=> fait un dernier retour sur le design pour que ce soit identique a la maquette 
(les icones, les couleurs, les polices, les espacements etc...)

------------------------------------------------------------------------------
## AGENDA PAGE (/agenda)

=> fait un dernier retour sur le design pour que ce soit identique a la maquette 
(les icones, les couleurs, les polices, les espacements etc...)

------------------------------------------------------------------------------
## RECHERCHE LAB PAGE (/researchlab)

1-supprime le fichier .css (a remplacer sur le css globale ou ficchié dédié)

=> fait un dernier retour sur le design pour que ce soit identique a la maquette 
(les icones, les couleurs, les polices, les espacements etc...)

------------------------------------------------------------------------------
## DEVELOPPEMENT DURABLE PAGE (/developpementdurable)

=> fait un dernier retour sur le design pour que ce soit identique a la maquette 
(les icones, les couleurs, les polices, les espacements etc...)

------------------------------------------------------------------------------
## POLITIQUES PAGE (/politiques)

=> fait un dernier retour sur le design pour que ce soit identique a la maquette 
(les icones, les couleurs, les polices, les espacements etc...)

