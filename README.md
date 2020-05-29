# API_HAL_demo
Développement d'une application web interfacée avec l'archive ouverte HAL.

## Contexte et justification
<p>La gestion des publications est une tâche importante dans un laboratoire de recherche.
L’archive ouverte HAL (https://hal.archives-ouvertes.fr/) est une plateforme permettant la gestion des publications. 
Les fonctionnalités de HAL sont rendues disponibles par des services web (https://api.archives-ouvertes.fr/docs). </p>


## Les Objectifs de la mission
<p>L'objectif du projet est de réaliser une application web s'appuyant sur les services web de HAL pour produire des tableaux de bord et de simplifier l'interrogation et l'ajout de références bibliographiques.</p>
 Les tâches à réaliser sont donc:
* Etudier l'API de HAL
* Analyser les besoins du laboratoire
* Définir et réaliser les tableaux de bord et les interfaces web

## Les fonctionnalités de l'application

✔ Recherche des articles en fonction de l’année<br>
  * Option de sélection des années sous forme de liste déroulante.<br>
  * Récupération du choix de l’utilisateur et renvoie du résultat sous forme de tableau (Titre de document, Description, date    de  publication et liens)<br>
  * Renvoie du nombre total de publication de l’année choisi.<br>
    
✔ Recherche en fonction Type de publication (ça peut être revue scientifique, un rapport de thèse, un journal, un livre etc.)<br>
  * Option de sélection des types de publication sous forme de liste déroulante.<br>
  * Récupération du choix de l’utilisateur et renvoie des résultats sous forme de Tableau (Les documents publiés par le type choisi :       Titre, Description, date de publication et lien).<br>
  * Renvoie du nombre de publications par rapport au type choisi.<br>

✔ Visualiser l’état des publications avec l’évolution par rapport aux autres années : <br>
  * Total des publications produits par années.<br>
  * Total des publications produits par type de publication.<br>


## Manuel utilisateur

###### Fonctionnalités de l'application
Cette application présente plusieurs fonctionnalités à savoir:
✔ Afficher le nombre de publications en fonction du type de publication et de l'année
✔ Afficher la liste des publications en fonction du type de publication et de l'année
✔ Afficher le graphisme présentatnt le nombre de  publications par type et par année
✔ Rechercher les publications par type de publication
✔ Rechercher les publications d'audiences nationales ou internationales
✔ Rechercher les publications par année
✔ Afficher la liste des erreurs de publication


###### Scenario d'usages de l'application
Cette application contient trois pages: <br>

✔ le dashbord: cette page permet,
* d'afficher le nombre de publications en fonction du type de publication et de l'année
* d'afficher la liste des publications en fonction du type de publication et de l'année
* d'afficher le graphisme présentatnt le nombre de  publications par type et par année
<br>

 ✔ Publication search: cette page permet,
 * de rechercher les publications par type de publication
 * de rechercher les publications d'audiences nationales ou internationales
 * de rechercher les publications par année

<br>

✔ Publication Errors: cette page permet d'afficher la liste des erreurs de publication
<br>

1. Accès à l'application

 *  Pour acceder à l'application, rendez-vous sur le lien  <https://terproject-api-hal.github.io/API-HAL-demo-website/html/index.html> <br>
 *  Ce lien permet d'acceder directement sur la page Dashbord <br>
 
2. Dashbord

  *  Une fois sur la page, on peut visualiser le tableau  et le graphique. <br>

  
  ![Capture1](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture1.png)

  
  ![Capture2](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture2.png)
  
  
  
  *  Sur cette page nous pouvons aussi accéder à la liste des publications en double cliquant sur la colone qui affiche le nombre de publication <br>
  *  Par exemple en double cliquant sur le nombre d'Article dans une revue publié en 2016 c'est à dire la colonne qui contient 7 cela affiche les 7 articles de revues publiés en 2016 <br>
  
  
  ![Capture3](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture3.png)
 
  
  
   3. Publication Search

  *  Pour acceder à cette page, il faut cliquer sur l'onglet Publication Search 


  
  ![Capture5](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture5.png)
 
  
  
   *  Cette page affiche par defaut la liste de toutes les publications éffectuées par les chercheurs du laboratoire DAVID



  
  ![Capture4](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture4.png)
  
  
  
   * Cette page nous donne la possibilité de rechercher les publication en fonction du type de publication 
   * Pour rechercher par exemple la liste des thèses, cliquez sur le ménu déroulant et cliquez sur thèse



  
  ![Capture7](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture7.png)


  
  ![Capture8](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture8.png)



   * Nous pouvons aussi rechercher la liste des publications d'audiences nationales et internationales
   * Pour rechercher par exemple la liste des publications d'audiences internationales



  
  ![Capture9](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture9.png)


  
  ![Capture10](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture10.png)
   
   
   
   * Nous pouvons rechercher la liste des publications par année
   * Pour rechercher par exemple la liste des publications de l'année 2019


  
  ![Capture11](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture11.png)


  
  ![Capture12](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture12.png)
   
  


## Manuel technique
 La conception de cette application a neccesité l'utilisation de plusieurs technologies:
 * Bootstrap: C'est un framework utilisant les langages HTML, CSS et JavaScript fournit aux développeurs des outils pour créer un site facilement. Ce framework nous a permis d'impléménter un design responsive pour notre application.

* Javascript: Nous avions utilisé ce langage pour effectuer des requêtes dans l'API HAL


## Construction du projet
Pour la construction du projet nous avons utiliser l'outils de gestion de dépendances qui en plus de la gestion des dépendances entre les modules, permet également de gerer le versionnement de notre application


## Perspectives pour amélioration de l'application

En perspective, cette application pourrait être amélioré en mettant en place un cache local qui permettra de dimunier le temps de réponse avec l'API Hal.


## Auteurs

|            Noms             |               Emails                   |
|-----------------------------|----------------------------------------|
|          Gora DIEYE         |          misterelgo@gmail.com          |
|      TAHOURA Koniba Jean    |          konibajean@gmail.com          |
| Traoré Rosemonde Bénédicte  | rosemonde-benedicte.traore@ens.uvsq.fr |





