# Conception de l'Application Mobile de Carnet de Suivi pour Crèches, Garderies et Baby-Sitters

---

## Cahier des Charges

### Présentation du Projet

Le projet consiste en la création d'une application mobile et web permettant de suivre les activités journalières des enfants en crèche, garderie ou sous la garde de baby-sitters. L'application permet aux professionnels de noter les moments clés de la journée (repas, sieste, activités, etc.) et de partager ces informations en temps réel avec les parents via des notifications. L'objectif est d'assurer un lien permanent entre les parents et le suivi quotidien de leur enfant, tout en simplifiant le processus de documentation pour les éducateurs.

---

### Définition des Besoins et Objectifs

#### Problèmes

- **Communication limitée** : Les parents reçoivent actuellement des informations limitées et souvent différées sur la journée de leur enfant.
- **Suivi manuel fastidieux** : Les carnets de suivi papier sont longs à remplir, non accessibles aux parents en temps réel, et sujets à perte.
- **Absence de personnalisation** : Chaque enfant a un rythme différent, mais les carnets de suivi manuels ne permettent pas facilement de personnaliser le suivi.

#### Objectifs

- **Suivi en temps réel** : Permettre aux parents de suivre les activités de leur enfant en temps réel, depuis n'importe où.
- **Notification instantanée** : Alerter les parents lorsque le carnet est mis à jour, pour plus de transparence.
- **Documentation simplifiée pour les éducateurs** : Faciliter la saisie des informations quotidiennes via une interface mobile intuitive.
- **Archivage et accessibilité** : Stocker l'historique des activités pour consultation ultérieure et permettre la personnalisation de chaque profil enfant.

---

### Fonctionnalités (Spécifications Fonctionnelles)

#### Fonctionnalités Principales

1. **Authentification sécurisée** : Inscription et connexion des utilisateurs (parents et éducateurs) avec gestion des rôles.
2. **Carnet de suivi numérique** : Enregistrement d'activités journalières par enfant (repas, sieste, jeux, activités, photos).
3. **Notifications en temps réel** : Notifications instantanées envoyées aux parents dès qu'une mise à jour est faite.
4. **Profil des enfants** : Création et gestion de profils enfants avec des informations de base.
5. **Tableau de bord des parents** : Visualisation des activités journalières et de l'historique.
6. **Interface éducateurs** : Simplification de la saisie des informations quotidiennes pour chaque enfant.

#### Fonctionnalités Secondaires

- **Paramètres utilisateur** : Gestion des préférences de notification et personnalisation du profil.
- **Support client intégré** : Fonction de contact pour obtenir de l'aide.

---

### MVP (Minimum Viable Product)

Pour que le projet fonctionne avec un minimum de fonctionnalités viables, le MVP comprendra :

- Authentification et gestion des rôles.
- Création de profil d'enfant et ajout de nouvelles activités.
- Notification en temps réel pour les parents.
- Visualisation des activités journalières par les parents.

#### Évolutions Potentielles (Hors MVP)

- Historique complet et options de filtrage pour les activités passées.
- Fonctionnalités de personnalisation (thèmes, options d'exportation).
- Analyses et rapports pour les éducateurs sur les activités des enfants.
- Support multi-établissements pour les grandes crèches ou réseaux de garderies.

---

### Spécifications Techniques (Technologies Utilisées)

#### Front-End : React Native avec Expo pour le Développement Mobile (iOS, Android) et Web

- **Choix** : React Native avec Expo, une plateforme performante et polyvalente pour le développement d'applications mobiles et web.
- **Justification** : 
  - **Multiplateforme** : React Native permet de créer des applications multiplateformes en partageant le code pour iOS, Android, et Web, réduisant le temps et les coûts de développement.
  - **Simplicité de configuration** : Expo offre un environnement de développement intégré qui facilite le déploiement rapide sur plusieurs plateformes sans avoir à configurer séparément les outils pour chaque OS.
  - **Écosystème riche** : React Native bénéficie d’une large communauté et d'un écosystème mature, facilitant l'accès à des bibliothèques tierces pour des fonctionnalités courantes (par exemple, la gestion de la navigation, l’accès aux appareils photo).
  - **Performance** : Contrairement aux technologies purement web comme Cordova, React Native utilise des composants natifs, assurant des performances élevées, cruciales pour une application réactive et fluide.
  - **Comparaison avec Flutter** : Flutter est une excellente alternative, mais React Native est plus proche du développement web classique (utilise JavaScript et TypeScript) et s'intègre bien avec des librairies déjà existantes pour le web. React Native permet également un rendu plus natif sur les plateformes iOS et Android, tandis que Flutter, bien que performant, utilise un moteur de rendu indépendant, ce qui peut parfois entraîner des différences visuelles subtiles.

#### Back-End : Deno et Express

- **Choix** : Deno avec Express en tant que framework de développement back-end.
- **Justification** : 
  - **Modernité et Sécurité** : Deno est une évolution de Node.js, conçu par le créateur original de Node avec une emphase sur la sécurité (exécution sécurisée par défaut sans accès au système de fichiers ou aux réseaux sans autorisation explicite).
  - **Gestion native de TypeScript** : Deno intègre le support de TypeScript sans configuration additionnelle, ce qui permet une meilleure maintenabilité du code grâce au typage statique et réduit les risques de bugs.
  - **Modules modernes** : Contrairement à Node.js, Deno utilise des modules basés sur des URLs, éliminant les fichiers `node_modules` et réduisant les conflits de version et la taille des dépendances.
  - **Utilisation d'Express** : Express est un framework mature, bien documenté, et léger, qui offre des solutions robustes pour la gestion des routes et des middlewares. Bien qu'initialement conçu pour Node.js, Express peut être utilisé avec Deno grâce à des modules compatibles, permettant d'utiliser ce framework largement adopté pour des besoins spécifiques sans se soucier de la courbe d'apprentissage.
  - **Comparaison avec Node.js** : Bien que Node.js reste le standard de l’industrie, Deno offre une meilleure sécurité par défaut et un écosystème plus moderne. Deno est particulièrement pertinent pour un projet où la sécurité et la modularité sont cruciales, comme c’est le cas pour une application gérant des données personnelles d’enfants.

#### Base de Données : PostgreSQL

- **Choix** : PostgreSQL comme système de gestion de base de données relationnelle.
- **Justification** :
  - **Robustesse et fiabilité** : PostgreSQL est l'un des systèmes de bases de données les plus robustes, fiable pour les données critiques et offrant une excellente sécurité.
  - **Fonctionnalités avancées** : PostgreSQL prend en charge des fonctionnalités complexes telles que le traitement JSON, la gestion des transactions et la réplication, offrant ainsi plus de flexibilité pour des données structurées et semi-structurées.
  - **Scalabilité** : Capable de gérer de gros volumes de données et des charges de travail intenses, PostgreSQL est adapté pour une application qui pourrait connaître une croissance rapide.
  - **Comparaison avec d'autres options** : Bien que MongoDB soit un choix populaire pour les données non relationnelles, PostgreSQL reste plus adapté ici en raison de la structure relationnelle des données (enfants, activités, utilisateurs) et de la nécessité de maintenir l'intégrité des données entre les tables.

#### Authentification : JWT (JSON Web Tokens)

- **Choix** : JSON Web Tokens (JWT) pour la gestion de l’authentification et des sessions utilisateur.
- **Justification** :
  - **Sécurité et stateless** : Les JWT permettent de gérer des sessions sans serveur (stateless), réduisant ainsi la charge sur le backend en évitant de stocker les sessions en base de données.
  - **Interopérabilité** : Les JWT sont un standard de l’industrie et fonctionnent bien sur différents clients (mobile, web) en permettant une gestion fluide des sessions via des tokens.
  - **Facilité d’intégration** : Deno supporte naturellement les bibliothèques JWT, et les JWT sont largement pris en charge par les frameworks front-end et back-end modernes.
  - **Comparaison avec les cookies** : Les cookies sont souvent utilisés pour les sessions web, mais pour une application multiplateforme, les JWT sont plus appropriés, notamment pour la compatibilité avec des API mobiles.

#### Notifications : Firebase Cloud Messaging (FCM)

- **Choix** : Firebase Cloud Messaging pour l'envoi de notifications en temps réel aux utilisateurs (notamment les parents).
- **Justification** :
  - **Support multiplateforme** : FCM est compatible avec iOS, Android, et Web, ce qui permet une intégration facile pour une application cross-plateforme.
  - **Envoi en temps réel** : FCM permet l'envoi de notifications instantanées, indispensable pour informer les parents en temps réel des mises à jour concernant leurs enfants.
  - **Fiabilité et scalabilité** : En tant que solution de Google, FCM est hautement fiable et peut supporter un grand nombre d'utilisateurs actifs.
  - **Comparaison avec d'autres solutions** : FCM est gratuit et largement utilisé, offrant un ensemble de fonctionnalités adaptées à la gestion des notifications. D'autres solutions comme OneSignal existent, mais FCM est plus intégré pour un environnement Google (utilisé par la majorité des applications Android et une part importante des applications iOS).

---

#### Justification Globale

Ces choix technologiques permettent de répondre aux principaux besoins du projet : une application sécurisée, performante et multiplateforme, capable de supporter un grand nombre d’utilisateurs simultanés avec une bonne scalabilité. Les choix de Deno et React Native, en particulier, garantissent une modernité et une flexibilité permettant d'anticiper les évolutions futures du produit.

---

### Cible du Projet

- **Public Visé** : Crèches, garderies, baby-sitters, et parents d'enfants en bas âge.
- **Contraintes Anticipées** :
  - **Visuelles** : Interface simple et intuitive pour les éducateurs avec des sections claires pour chaque activité.
  - **Ergonomiques** : Optimisation mobile prioritaire pour faciliter l'usage quotidien.
  - **Techniques** : Compatibilité iOS, Android et Web.

### Navigateurs Compatibles

- **Mobile** : iOS Safari, Android Chrome.
- **Web** : Chrome, Safari, Firefox, Edge.

---

### Arborescence de l'Application (Chemin Utilisateur)

1. **Page de Connexion / Inscription**
2. **Dashboard (Accueil)** 
   - **Éducateur** : Liste des enfants, accès aux profils et ajout d'activités.
   - **Parent** : Liste des activités de l'enfant, visualisation des détails.
3. **Profil Enfant**
   - Ajout d'activité (repas, sieste, etc.)
4. **Paramètres** : Gestion des préférences de notification et du profil.

---

### User Stories

#### Rôle : Éducateur

1. **En tant qu’éducateur**, je dois pouvoir **ajouter une activité** (repas, sieste, jeu, etc.) pour un enfant depuis son profil afin de documenter facilement chaque moment important de sa journée.
   
2. **En tant qu’éducateur**, je dois pouvoir **prendre et ajouter une photo** d’une activité pour un enfant afin que les parents puissent visualiser des moments de la journée de leur enfant.

3. **En tant qu’éducateur**, je dois pouvoir **voir la liste des enfants dont j’ai la charge** pour faciliter mon accès aux profils sans avoir à rechercher manuellement chaque enfant.

4. **En tant qu’éducateur**, je dois pouvoir **modifier ou supprimer une activité ajoutée par erreur** dans le carnet de suivi d’un enfant, pour garantir l'exactitude des informations.

5. **En tant qu’éducateur**, je dois pouvoir **recevoir une confirmation visuelle** après l’ajout d’une activité pour m'assurer que l'activité a bien été enregistrée.

6. **En tant qu’éducateur**, je dois pouvoir **voir l’historique des activités de chaque enfant** pour consulter rapidement ce qui a été documenté récemment.

7. **En tant qu’éducateur**, je dois pouvoir **configurer mes préférences de notification** afin de gérer les alertes importantes sans être submergé de notifications.

---

#### Rôle : Parent

1. **En tant que parent**, je dois pouvoir **consulter le carnet de suivi de mon enfant depuis mon tableau de bord** pour suivre en temps réel les activités de ma journée.

2. **En tant que parent**, je dois pouvoir **recevoir une notification en temps réel** lorsqu’une nouvelle activité est ajoutée au carnet de suivi de mon enfant pour être informé immédiatement de sa journée.

3. **En tant que parent**, je dois pouvoir **visualiser les photos** prises par l’éducateur pendant les activités de mon enfant pour voir les moments marquants de sa journée.

4. **En tant que parent**, je dois pouvoir **accéder à l'historique des activités de mon enfant** pour revoir les informations précédentes et suivre son évolution au fil des jours.

5. **En tant que parent**, je dois pouvoir **ajuster mes préférences de notification** pour choisir le type d'alertes que je reçois (ex. nouvelles activités, photos, alertes spécifiques).

6. **En tant que parent**, je dois pouvoir **me déconnecter de l’application** pour assurer la sécurité de mes informations.

7. **En tant que parent**, je dois pouvoir **recevoir une alerte si des informations importantes sont manquantes dans le carnet de suivi** (comme les repas ou la sieste) pour assurer un suivi complet de la journée de mon enfant.

---

#### Rôle : Administrateur

1. **En tant qu’administrateur**, je dois pouvoir **ajouter, modifier ou supprimer des utilisateurs** (parents, éducateurs) pour gérer l'accès de façon centralisée.

2. **En tant qu’administrateur**, je dois pouvoir **attribuer des rôles** aux utilisateurs (parent, éducateur) afin de contrôler les autorisations d'accès et les actions possibles pour chaque type d'utilisateur.

3. **En tant qu’administrateur**, je dois pouvoir **afficher une liste des utilisateurs et leurs rôles** pour avoir une vue d’ensemble des accès et des autorisations.

4. **En tant qu’administrateur**, je dois pouvoir **réinitialiser le mot de passe d’un utilisateur** en cas de demande pour garantir la sécurité des comptes.

5. **En tant qu’administrateur**, je dois pouvoir **gérer les paramètres de l'application** (comme les notifications globales ou les paramètres de sécurité) pour répondre aux besoins de tous les utilisateurs.

6. **En tant qu’administrateur**, je dois pouvoir **suivre l’utilisation de l’application** (nombre d’utilisateurs actifs, taux d’utilisation) pour évaluer l'impact de l'application et identifier les besoins d'amélioration.

7. **En tant qu’administrateur**, je dois pouvoir **consulter un journal des activités importantes** (comme les ajouts d’utilisateurs ou les modifications de profil) pour assurer la sécurité et la conformité des accès.


---

### Analyse des Risques

1. **Risques de sécurité** : Protection des données personnelles, authentification sécurisée avec JWT.
2. **Défaillance des notifications** : Planifier un système de relance en cas d’échec d’envoi des notifications.
3. **Montée en charge** : Assurer la scalabilité de l'architecture backend et gérer les pics de trafic.

---

### Rôles et Responsabilités

En tant que développeur solo, j’assume toutes les responsabilités du développement de l’application, couvrant le front-end, le back-end, et la gestion de projet. Voici un découpage de mes principales responsabilités 

#### Développement Front-End

- **Conception et réalisation de l'interface utilisateur (UI)** : Créer une interface intuitive et réactive, adaptée aux besoins des éducateurs et des parents, en respectant les bonnes pratiques d'ergonomie.
- **Expérience utilisateur (UX)** : Concevoir une expérience fluide pour les utilisateurs en optimisant la navigation, les interactions, et les transitions d’écran.
- **Gestion des composants et des états** : Développer et organiser les composants React Native, en gérant les états et la logique de l'application de manière efficace pour assurer des performances élevées.

#### Développement Back-End

- **Conception et développement des endpoints API** : Créer des API sécurisées et performantes avec Deno et Express, pour gérer les requêtes front-end et les interactions avec la base de données.
- **Gestion de la base de données** : Mettre en place et administrer la base de données PostgreSQL, définir les schémas, gérer les relations entre les tables, et garantir l'intégrité des données.
- **Sécurité et authentification** : Implémenter des mesures de sécurité pour protéger les données des utilisateurs, y compris la gestion de l'authentification avec JWT et la protection des informations sensibles.

#### Gestion de Projet

- **Planification et suivi de la roadmap** : Définir les étapes clés du projet, établir un calendrier et gérer les priorités pour respecter les délais.
- **Organisation des tâches** : Découper les tâches en étapes réalisables et s'assurer de leur suivi, en utilisant des outils de gestion de tâches (comme Trello ou Notion) pour rester organisé.
- **Documentation** : Documenter le code, l'architecture de l'application, et les décisions de conception pour faciliter les futures évolutions du projet.
- **Tests et qualité** : Effectuer des tests unitaires et d'intégration pour chaque fonctionnalité, réaliser des tests utilisateurs, et résoudre les bugs pour garantir une application stable et performante.

#### Communication et Support (en prévision de la mise en production)

- **Support utilisateur** : Préparer un support pour répondre aux questions des utilisateurs et gérer les retours d’expérience pour améliorer l’application.
- **Gestion des retours utilisateurs** : Analyser les retours des utilisateurs post-lancement pour identifier les améliorations nécessaires, planifier les évolutions, et assurer la maintenance de l’application.


---

## Documents de Conception


### Structure de la Base de Données

| Table         | Champs          | Type          | Description                                             |
|---------------|-----------------|---------------|---------------------------------------------------------|
| **users**     | `id`            | INT           | Identifiant unique de l'utilisateur                     |
|               | `name`          | VARCHAR(100)  | Nom de l'utilisateur                                    |
|               | `email`         | VARCHAR(255)  | Adresse email de l'utilisateur                          |
|               | `role`          | ENUM          | Rôle de l'utilisateur (`parent`, `educator`, `admin`)   |
|               | `created_at`    | TIMESTAMP     | Date de création de l'utilisateur                       |
| **children**  | `id`            | INT           | Identifiant unique de l'enfant                          |
|               | `name`          | VARCHAR(100)  | Nom de l'enfant                                         |
|               | `dob`           | DATE          | Date de naissance de l'enfant                           |
|               | `profile_image` | VARCHAR(255)  | URL de la photo de profil de l'enfant                   |
| **activities**| `id`            | INT           | Identifiant unique de l'activité                        |
|               | `child_id`      | INT           | Identifiant de l'enfant associé                         |
|               | `educator_id`   | INT           | Identifiant de l'éducateur ayant ajouté l'activité      |
|               | `type`          | VARCHAR(50)   | Type d'activité (repas, sieste, etc.)                   |
|               | `description`   | TEXT          | Description de l'activité                               |
|               | `photo_url`     | VARCHAR(255)  | URL de la photo associée à l'activité                   |
|               | `created_at`    | TIMESTAMP     | Date et heure de l'ajout de l'activité                  |
| **establishments** | `id`                | INT            | Identifiant unique de l'établissement                    |
|                   | `name`               | VARCHAR(255)   | Nom de l'établissement                                   |
|                   | `address`            | VARCHAR(255)   | Adresse de l'établissement                               |
|                   | `phone_number`       | VARCHAR(15)    | Numéro de téléphone de l'établissement                   |
|                   | `created_at`         | TIMESTAMP      | Date de création de l'établissement                      

---

### Endpoints API

| Méthode | Endpoint                           | Description                                                   |
|---------|------------------------------------|---------------------------------------------------------------|
| `POST`  | `/api/auth/login`                  | Authentifie l'utilisateur et génère un token                  |
| `POST`  | `/api/auth/register`               | Enregistre un nouvel utilisateur                              |
| `GET`   | `/api/users/:id`                   | Récupère les informations d'un utilisateur                    |
| `PUT`   | `/api/users/:id`                   | Modifie les informations d'un utilisateur                     |
| `DELETE`| `/api/users/:id`                   | Supprime un utilisateur                                       |
| `GET`   | `/api/children`                    | Récupère la liste des enfants d'un éducateur                  |
| `GET`   | `/api/children/:id`                | Récupère les informations d'un enfant                         |
| `POST`  | `/api/children`                    | Ajoute un nouvel enfant                                       |
| `PUT`   | `/api/children/:id`                | Modifie les informations d'un enfant                          |
| `DELETE`| `/api/children/:id`                | Supprime un enfant                                            |
| `GET`   | `/api/activities`                  | Récupère la liste des activités pour un enfant                |
| `POST`  | `/api/activities`                  | Crée une nouvelle activité pour un enfant                     |
| `GET`   | `/api/activities/:id`              | Récupère les détails d'une activité                           |
| `PUT`   | `/api/activities/:id`              | Modifie une activité                                          |
| `DELETE`| `/api/activities/:id`              | Supprime une activité                                         |
| `GET`   | `/api/establishments`             | Récupère la liste de tous les établissements              |
| `GET`   | `/api/establishments/:id`         | Récupère les informations d'un établissement spécifique   |
| `POST`  | `/api/establishments`             | Crée un nouvel établissement                              |
| `PUT`   | `/api/establishments/:id`         | Modifie les informations d'un établissement existant      |
| `DELETE`| `/api/establishments/:id`         | Supprime un établissement                                 |


---

### Use Cases

#### Use Case 1 : Ajout d'une Activité par l'Éducateur

- **Acteurs** : Éducateur
- **Préconditions** : L'éducateur doit être connecté et avoir les droits d'accès pour ajouter une activité.
- **Déclencheur** : L'éducateur décide d'ajouter une activité pour un enfant (repas, sieste, activité, etc.).
- **Scénario Principal** :
  1. L'éducateur se rend sur le profil de l'enfant dans l'application.
  2. L'éducateur sélectionne l'option "Ajouter une activité".
  3. L'éducateur remplit les détails de l'activité (type, description, photo si nécessaire).
  4. L'éducateur valide l'ajout de l'activité.
  5. L'application enregistre l'activité dans la base de données.
  6. L'application envoie une notification en temps réel aux parents de l'enfant.
- **Post-conditions** : L'activité est enregistrée et visible par les parents de l'enfant dans leur tableau de bord.
- **Exceptions** :
  - Si l'éducateur n'a pas accès à l'enfant, l'application affiche un message d'erreur.
  - Si l'application est hors ligne, l'activité est enregistrée en local et sera synchronisée une fois la connexion rétablie.

---

#### Use Case 2 : Consultation du Carnet de Suivi par les Parents

- **Acteurs** : Parent
- **Préconditions** : Le parent doit être connecté et avoir un lien avec un enfant enregistré dans l'application.
- **Déclencheur** : Le parent souhaite consulter les activités récentes de son enfant.
- **Scénario Principal** :
  1. Le parent se connecte à l'application et accède à son tableau de bord.
  2. Le parent sélectionne le profil de son enfant.
  3. L'application affiche le carnet de suivi de l'enfant, avec les activités récentes (repas, sieste, activités, etc.).
  4. Le parent peut cliquer sur chaque activité pour en voir les détails (photos, description).
- **Post-conditions** : Le parent a accès aux informations récentes et complètes sur la journée de son enfant.
- **Exceptions** :
  - Si l'enfant n'a pas d'activité enregistrée pour la journée, un message indique "Aucune activité pour le moment".
  - Si le parent n’a pas de lien avec un enfant, un message d'erreur s'affiche.

---

#### Use Case 3 : Gestion des Utilisateurs et des Rôles par l'Administrateur

- **Acteurs** : Administrateur
- **Préconditions** : L'administrateur doit être connecté avec les droits nécessaires pour gérer les utilisateurs.
- **Déclencheur** : L'administrateur souhaite ajouter, modifier ou supprimer un utilisateur.
- **Scénario Principal** :
  1. L'administrateur accède à la section "Gestion des utilisateurs".
  2. L'administrateur consulte la liste des utilisateurs existants.
  3. L'administrateur peut :
     - Ajouter un nouvel utilisateur en spécifiant son rôle (parent, éducateur).
     - Modifier les informations d'un utilisateur existant (nom, email, rôle).
     - Supprimer un utilisateur du système.
  4. L'application enregistre les modifications apportées par l'administrateur.
- **Post-conditions** : La liste des utilisateurs est mise à jour selon les modifications apportées par l'administrateur.
- **Exceptions** :
  - Si l'administrateur tente de supprimer un utilisateur associé à des données essentielles (comme un éducateur ayant des activités en cours), un message d'erreur s'affiche.

---

#### Use Case 4 : Réception de Notifications en Temps Réel par les Parents

- **Acteurs** : Parent
- **Préconditions** : Le parent doit être connecté et doit avoir activé les notifications pour recevoir des alertes en temps réel.
- **Déclencheur** : Un éducateur ajoute une nouvelle activité pour l'enfant du parent.
- **Scénario Principal** :
  1. Un éducateur enregistre une nouvelle activité pour un enfant dans l'application.
  2. L'application envoie une notification en temps réel au parent de l'enfant.
  3. Le parent reçoit une notification sur son appareil (mobile ou web).
  4. Le parent clique sur la notification pour accéder aux détails de l'activité.
- **Post-conditions** : Le parent est informé en temps réel des nouvelles activités de son enfant.
- **Exceptions** :
  - Si le parent n'a pas activé les notifications, il ne recevra pas l'alerte.
  - Si le parent n'est pas connecté, la notification sera visible à sa prochaine connexion.

---

#### Use Case 5 : Modification des Préférences de Notification par les Parents

- **Acteurs** : Parent
- **Préconditions** : Le parent doit être connecté.
- **Déclencheur** : Le parent souhaite personnaliser le type et la fréquence des notifications reçues.
- **Scénario Principal** :
  1. Le parent accède aux paramètres de notification dans l'application.
  2. Le parent sélectionne ses préférences (ex. recevoir des notifications uniquement pour certaines activités ou uniquement à des heures spécifiques).
  3. Le parent enregistre ses préférences.
  4. L'application met à jour les paramètres de notification pour l'utilisateur.
- **Post-conditions** : Les notifications sont envoyées au parent en fonction de ses préférences.
- **Exceptions** :
  - Si le parent désactive toutes les notifications, un message d’avertissement peut s'afficher pour confirmer cette action.

---

### Dictionnaire de Données

#### Entité : `users`

| Attribut          | Type           | Description                                                    |
|-------------------|----------------|----------------------------------------------------------------|
| `id`              | INT            | Identifiant unique de l'utilisateur                            |
| `name`            | VARCHAR(100)   | Nom de l'utilisateur                                           |
| `email`           | VARCHAR(255)   | Adresse email de l'utilisateur                                 |
| `role`            | ENUM           | Rôle de l'utilisateur (`parent`, `educator`, `admin`)          |
| `created_at`      | TIMESTAMP      | Date de création de l'utilisateur                              |

---

#### Entité : `children`

| Attribut          | Type           | Description                                                    |
|-------------------|----------------|----------------------------------------------------------------|
| `id`              | INT            | Identifiant unique de l'enfant                                 |
| `name`            | VARCHAR(100)   | Nom de l'enfant                                                |
| `dob`             | DATE           | Date de naissance de l'enfant                                  |
| `profile_image`   | VARCHAR(255)   | URL de la photo de profil de l'enfant                          |

---

#### Entité : `activities`

| Attribut          | Type           | Description                                                    |
|-------------------|----------------|----------------------------------------------------------------|
| `id`              | INT            | Identifiant unique de l'activité                               |
| `child_id`        | INT            | Identifiant de l'enfant associé                                |
| `educator_id`     | INT            | Identifiant de l'éducateur ayant ajouté l'activité             |
| `type`            | VARCHAR(50)    | Type d'activité (repas, sieste, jeu, etc.)                     |
| `description`     | TEXT           | Description détaillée de l'activité                            |
| `photo_url`       | VARCHAR(255)   | URL de la photo associée à l'activité                          |
| `created_at`      | TIMESTAMP      | Date et heure de l'ajout de l'activité                         |

---

#### Entité : `establishments`

| Attribut       | Type         | Description                                       |
|----------------|--------------|---------------------------------------------------|
| `id`           | INT          | Identifiant unique de l'établissement             |
| `name`         | VARCHAR(255) | Nom de l'établissement (ex. crèche, garderie)     |
| `address`      | VARCHAR(255) | Adresse physique de l'établissement               |
| `phone_number` | VARCHAR(15)  | Numéro de téléphone de l'établissement            |
| `created_at`   | TIMESTAMP    | Date et heure de création de l'enregistrement     |

---

### Relations entre les Entités

- `establishments` et `users` : Un établissement peut avoir plusieurs utilisateurs (éducateurs et parents).
- `users` et `children` : Un éducateur (user avec rôle `educator`) peut être associé à plusieurs enfants.
- `children` et `activities` : Un enfant peut avoir plusieurs activités ajoutées par un éducateur.


