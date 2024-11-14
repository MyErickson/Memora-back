# Application de Suivi Journalier pour Crèches et Garderies

## Présentation du Projet

Ce projet est une **application mobile et web** qui permet de suivre les activités journalières des enfants en crèche, garderie, ou sous la garde de baby-sitters. L’application permet aux professionnels de noter les moments clés de la journée (repas, sieste, activités, etc.) et de partager ces informations en temps réel avec les parents via des notifications. L’objectif est de maintenir un lien constant entre les parents et le suivi quotidien de leur enfant, tout en simplifiant le processus de documentation pour les éducateurs.

## Fonctionnalités

- **Suivi en temps réel** : Les éducateurs peuvent enregistrer les événements clés de la journée pour chaque enfant, et les parents sont notifiés instantanément.
- **Historique des activités** : Accès à l’historique des activités journalières.
- **Notifications push** : Les parents reçoivent des notifications push pour chaque mise à jour.
- **Interface intuitive** : Une interface simple pour une utilisation fluide par les éducateurs et les parents.

## Prérequis

- [Docker](https://www.docker.com/get-started) et [Docker Compose](https://docs.docker.com/compose/install/) installés.
- [Deno 2.0+](https://deno.land/) (facultatif) si vous souhaitez exécuter le projet en local sans Docker.

## Installation

1. Clonez le projet sur votre machine locale :

   ```bash
   git clone https://github.com/MyErickson/Memora-back.git
   cd memora-back
   ```

2. Créez un fichier `.env` dans le dossier racine du projet :

   ```bash
   touch .env
   ```

3. Remplissez le fichier `.env` avec les variables d’environnement nécessaires :

   ```bash
   POSTGRES_USER=myuser
   POSTGRES_PASSWORD=secure_password
   POSTGRES_DB=mydatabase
   DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}
   ```

## Configuration

### Docker

Pour exécuter le projet en local, vous pouvez utiliser Docker. Pour ce faire, suivez les étapes suivantes :

1. Pour démarrer l’application et la base de données:

   ```bash
   docker-compose up --build
   ```
   Cette commande :
	-	Construit l’image Deno à partir du Dockerfile.
	-	Lance un conteneur PostgreSQL avec les informations de connexion définies dans .env.
	-	Expose l’application Deno sur le port 8000.

2. Pour arrêter les conteneurs Docker, exécutez :
  ```bash
   docker-compose down
   ```

 ## Scripts disponibles
 
 ### Développement

- **Développement** : Pour exécuter le projet en local, utilisez la commande suivante :

  ```bash
  deno task dev
  ```

- **Tests** : Pour exécuter les tests unitaires, utilisez la commande suivante :

  ```bash
  deno task test
  ```

- **Formatage** : Pour formater le code source, utilisez la commande suivante :

  ```bash
  deno task format
  ```

- **Lint** : Pour lint le code source, utilisez la commande suivante :

  ```bash
  deno task lint
  ```

- **Vérification de la qualité** : Pour vérifier la qualité du code source, utilisez la commande suivante :

  ```bash
  deno task check
  ```

### Production

- **Build** : Pour construire l’application, utilisez la commande suivante :

  ```bash
  deno task build
  ```