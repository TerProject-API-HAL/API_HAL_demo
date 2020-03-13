# API_HAL_demo
Développement d'une application web interfacée avec l'archive ouverte HAL.

## Membre du projet

|            Noms             |               Emails                   |
|-----------------------------|----------------------------------------|
|          Gora DIEYE         |          misterelgo@gmail.com          |
|      TAHOURA Koniba Jean    |          konibajean@gmail.com          |
| Traoré Rosemonde Bénédicte  | rosemonde-benedicte.traore@ens.uvsq.fr |

## Contexte et justification
<p>La gestion des publications est une tâche importante dans un laboratoire de recherche.
L’archive ouverte HAL (https://hal.archives-ouvertes.fr/) est une plateforme permettant la gestion des publications. 
Les fonctionnalités de HAL sont rendues disponibles par des services web (https://api.archives-ouvertes.fr/docs). </p>

## Les Objectifs de la mission
<p>L'objectif du projet est de réaliser une application web s'appuyant sur les services web de HAL pour produire des tableaux de bord et de simplifier l'interrogation et l'ajout de références bibliographiques.</p>
> Les tâches à réaliser sont donc:
* Etudier l'API de HAL
* Analyser les besoins du laboratoire
* Définir et réaliser les tableaux de bord et les interfaces web

## Les Résultats attendus

✔	Recherche des articles en fonction de l’année<br>
  *	Option de sélection des années sous forme de liste déroulante.<br>
  *	Récupération du choix de l’utilisateur et renvoie du résultat sous forme de tableau (Titre de document, Description, date de             publication et liens)<br>
  *	Renvoie du nombre total de publication de l’année choisi.<br>
  
✔	Recherche en fonction de l’équipe de chercheurs<br>
  *	Option de sélection des équipes sous forme de liste déroulante.<br>
  *	Récupération du choix de l’utilisateur et renvoie des résultats sous forme de Tableau 
  (Les documents publiés par l’équipe concernée: Titre, Description, date de publication et lien).<br>
  *	Renvoie du nombre de publications de l’équipe.<br>
  
✔	Recherche en fonction Type de publication (ça peut être revue scientifique, un rapport de thèse, un journal, un livre etc.)<br>
  *	Option de sélection des types de publication sous forme de liste déroulante.<br>
  *	Récupération du choix de l’utilisateur et renvoie des résultats sous forme de Tableau (Les documents publiés par le type choisi :       Titre, Description, date de publication et lien).<br>
  *	Renvoie du nombre de publications par rapport au type choisi.<br>

✔	Visualiser l’état des publications avec l’évolution par rapport aux autres années : <br>
  *	Total des publications produits par années.<br>
  *	Total des publications produits par type de publication.<br>
  *	Total des publications produits par équipe.<br>

