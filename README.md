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


## Manuel utilisateur

### Fonctionnalités de l'application
Cette application présente plusieurs fonctionnalités à savoir:
* Afficher le nombre de publication en fonction du type de publication et de l'année
* Afficher la liste des publications en fonction du type de publication et de l'année
* Afficher le graphisme présentant le nombre de  publication par type et par année
* Rechercher les publications par type de publication
* Rechercher les publications d'audiences nationales ou internationales
* Rechercher les publications par année
* Afficher la liste des erreurs de publication


### Scenario d'usages de l'application
Cette application contient trois menus verticales: <br>

✔ Dashbord: en cliquant sur ce menu, nous avons la possibilité,
* d'afficher le nombre de publication en fonction du type de publication et de l'année
* d'afficher la liste des publications en fonction du type de publication et de l'année
* d'afficher le graphisme présentatnt le nombre de  publication par type et par année
<br>

 ✔ Publication search: en cliquant sur ce menu, nous avons la possibilité,
 * de rechercher les publications par type de publication
 * de rechercher les publications d'audiences nationales ou internationales
 * de rechercher les publications par année

<br>

✔ Publication Errors: en cliquant sur ce menu, nous avons accès à la liste des erreurs de publication
<br>

1. Accès à l'application

 *  Pour acceder à l'application, rendez-vous sur le lien  <https://terproject-api-hal.github.io/David-website/html/> <br>
 *  Ce lien permet d'acceder directement sur la page Dashbord <br>
 
2. Dashbord

  *  Le menu Dashbord nous donne la possibilité de visualiser le tableau  et le graphique. <br> 

  ![Capture1](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture1.png)
  ![Capture2](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture2.png)
  
  
  *  Nous pouvons aussi accéder à la liste des publications en cliquant sur une donnée pour afficher les publications concernées<br>
  *  Par exemple on peut cliquer sur le nombre d'Article dans une revue publié en 2016 c'est à dire la colonne qui contient 7 <br>

  ![Capture3](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture3.png)
 
  * Liste des 7 articles de revues publiés en 2016 <br>

  ![Capture4](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture4.png)
 
  
3. Publication Search

  *  Pour rechercher les publications en fonction du type, de l'année, et rechercher les publications d'audiences nationales ou
     internationales, il faut cliquer sur l'onglet Publication Search 

  ![Capture5](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture5.png)

  
   *  Lorsqu'on clique sur l'onglet Publication Search , nous avons accès à la liste de toutes les publications éffectuées par les chercheurs
    du laboratoire DAVID.

  ![Capture6](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture6.png)
  
  
   * Nous avons aussi la possibilité de rechercher les publication en fonction du type de publication.
   * Exemple de recherche de la liste des thèses:

  ![Capture7](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture7.png)

  * Puis cliquer sur thèse

  ![Capture8](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture8.png)

  Liste des thèses

  ![Capture9](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture9.png)


   * Nous pouvons également rechercher la liste des publications d'audiences nationales et internationales.
   * Exemple de recherche de la liste des publications d'audiences internationales.

  ![Capture10](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture10.png)

  Liste des publications d'audiences internationales

  ![Capture11](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture11.png)
   
   * En plus, nous pouvons rechercher la liste des publications par année
   * Exemple de recherche de la liste des publications de l'année 2019

  ![Capture12](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture12.png)

  Liste des publications de l'année 2019

  ![Capture13](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture13.png)


 4. Publication Errors

 Pour afficher les erreurs de publication, il faut cliquer sur l'onglet Publication Errors

   ![Capture14](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture14.png)

   Au clic de cet onglet nous avons accès à la liste des erreurs de publication
   
  ![Capture15](https://github.com/TerProject-API-HAL/API_HAL_demo/blob/master/plugins/images/Capture15.png)
   
  
## Manuel technique

### Solutions tcheniques
 La conception de cette application a neccesité l'utilisation de plusieurs technologies:

 ✔ Au niveau du front-end nous avions utilisé : <br>
 * Bootstrap: C'est un framework utilisant les langages HTML, CSS, JavaScript et fournit aux développeurs des outils pour créer un site facilement. Ce framework nous a permis d'impléménter un design responsive pour notre application.
 * HTML: pour définir les différents éléments des pages de l'application
 * CSS: pour la mise en forme des différents contenus définis par le HTML 
 * JavaScript: pour rendre les pages de l'application dynamiques.
 * Plug-ins DataTables de Jquery: pour gérer la pagination, le filtrage et la sélection des données du tableau des statistiques au niveau de la page dashboard 
 * Chart.js : C'est une bibliothèque JavaScript open source qui a été utilisé pour la visualisation des données du graphisme dans le dashboard

 ✔ Au niveau du back-end nous avions utilisé: <br>
* JQuery: Nous avions utilisé ce framework de JavaScript pour effectuer des requêtes dans l'API HAL


### Conception du projet

Pour la conception du projet nous avons utilisé la méthodologie de gestion de projet scrum couplé au méthode de développement de processus 2TUP.
* Nous avions d'abord fait une étude de l'API HAL 
* Ensuite, nous avions analysé les besoins du laboratoire DAVID
* Puis, nous avions analysé les besoins de l'application
* Enfin, nous avions divisé le projet en des tâches auquelles nous nous sommes reparties. Chaque tâche était d'abord planifié avant d'être exécuter cela nous permettait d'excuter les differentes tâches dans les meilleurs délais.


## Construction du projet

Pour la construction du projet nous avons utiliser l'outils de gestion de dépendances NPM qui en plus de la gestion des dépendances entre les modules, permet également de gerer le versionnement de notre application.
Pour cela, nous avons crée un fichier package.json dans lequel nous avions définies les versions du projet ainsi que les dépendences utilisées.
  
    ```a
    {
    "name": "projet_API_Hal",
    "version": "0.1.0",
  "homepage": "https://github.com/TerProject-API-HAL/API-HAL-demo-website",
  { "license" : "BSD-3-Clause" },
    "dependencies": {
        "markdown": "~0.4",
    "jquery": "~2.1.4",
    "Bootstrap": "4.5"
    }
}
  ```
par exemple pour construire un projet avec npm, on procède comme suit:
Prérequis :
Avoir NodeJs installé
https://nodejs.org/

    1. Créez le dossier du projet
    2. Ouvrez une console dans ce dossier (utilisez la commande cd si besoin...)
    3. Dans la console, tapez "npm init" et répondez aux questions. Le fichier package.json sera alors créé.
    4. Pour installer les modules dont vous aurez besoin pour votre projet, utilisez la commande :
    "npm install <pkg> --save"
    (Le --save permet d'ajouter ce module dans le fichier package.json)
    5. Créez votre fichier js d'entrée dans le dossier, par exemple app.js
    6. Écrivez dedans : console.log("NodeJS start");
    7. Dans la console : tapez "node app.js", normalement "NodeJS start" doit s'afficher.


## Perspectives pour amélioration de l'application

En perspective, cette application pourrait être améliorée en mettant en place un cache local qui permettra de dimunier le temps de réponse avec l'API Hal.





## Auteurs

|            Noms             |               Emails                   |
|-----------------------------|----------------------------------------|
|          Gora DIEYE         |          misterelgo@gmail.com          |
|      TAHOURA Koniba Jean    |          konibajean@gmail.com          |
| Traoré Rosemonde Bénédicte  |    traore.rose.benedicte@gmail.com     |





