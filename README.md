# Site Internet Personnel

Ce projet consiste en un site internet personnel comprenant une page d'accueil dynamique qui présente une personne avec sa photo, son nom et prénom, ses liens vers ses réseaux sociaux (Instagram, LinkedIn, Twitter, Facebook, Discord) ainsi que trois liens vers d'autres pages du site.

## Structure du Projet

- **index.html**  
  La page d'accueil principale qui contient :
  - Une barre de navigation affichant les icônes des réseaux sociaux. Chaque icône renvoie vers le profil correspondant.
  - Une section de présentation (hero) avec une photo circulaire et un texte d'introduction.
  - Un script JavaScript qui affiche un message de salutation dynamique en fonction de l'heure (Bonjour, Bon après-midi ou Bonsoir).
  - Un arrière-plan en dégradé moderne (par exemple, un dégradé de bleu) qui apporte du dynamisme au design.
  - Trois bulles cliquables redirigeant vers les pages `MDP.html`, `Bideogemu.html` et `GameZone.html`.

- **MDP.html, Bideogemu.html, GameZone.html**  
  Ces fichiers représentent les autres pages du site, accessibles via les bulles de liens de la page d'accueil.

- **photo.jpg**  
  L'image utilisée pour la photo de profil (à remplacer par votre propre image).

## Personnalisation

- **Photo de Profil** :  
  Remplacez `photo.jpg` par votre propre image et assurez-vous que le chemin d'accès est correct.

- **Réseaux Sociaux** :  
  Mettez à jour les URL dans la barre de navigation pour pointer vers vos propres profils sur Instagram, LinkedIn, Twitter, Facebook et Discord.

- **Texte de Présentation** :  
  Modifiez le contenu des balises `<h1>` et `<p>` dans la section de présentation pour afficher votre nom et une description personnelle.

- **Liens Internes** :  
  Les bulles redirigent vers `MDP.html`, `Bideogemu.html` et `GameZone.html`. Personnalisez ces pages selon vos besoins.

- **Design et Arrière-plan** :  
  Le dégradé d'arrière-plan est défini via CSS avec la propriété `background: linear-gradient(...)`. Vous pouvez ajuster les couleurs et l'orientation pour coller au design souhaité.

## Installation et Exécution

1. **Téléchargement des fichiers**  
   Clonez ou téléchargez l'ensemble du projet dans un répertoire de votre choix.

2. **Ouverture de la page**  
   Ouvrez le fichier `index.html` dans votre navigateur web pour visualiser la page d'accueil.

3. **Navigation**  
   Utilisez la barre de navigation pour accéder à vos réseaux sociaux et les bulles pour explorer les autres pages du site.

## Technologies Utilisées

- **HTML5** : Pour la structure de la page.
- **CSS3** : Pour le design, la mise en page et le dégradé d'arrière-plan.
- **JavaScript** : Pour la fonctionnalité de salutation dynamique basée sur l'heure.
- **Font Awesome** : Pour l'affichage des icônes des réseaux sociaux.

## Auteur

- **Paul Teillet** – Créateur du site personnel

## Licence

---
