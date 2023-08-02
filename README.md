
# Modélisation et mise en place une application web e-commerce (serre intelligente)

## Description du projet:

Application web e-commerce pour la serre intelligente :
Intégrer des fonctionnalités de panier d'achat, de paiement en ligne et de gestion des commandes pour permettre aux agriculteurs d'acheter des serres intelligentes en ligne.
Créer une interface utilisateur conviviale et responsive pour une expérience d'achat agréable.
Utiliser Angular 13 pour le développement de l'application web.
Utiliser Express.js comme framework backend pour gérer les requêtes et les opérations liées à la vente en ligne.
Utiliser Sequelize comme ORM (Object-Relational Mapping) pour interagir avec la base de données.

Tableau de bord de contrôle intégré :
Développer une application web pour intégrer le tableau de bord de contrôle de la serre intelligente au site web e-commerce.
Permettre aux agriculteurs de surveiller et de contrôler les paramètres de croissance des plantes tels que la température, l'humidité, l'éclairage, etc.
Utiliser Angular 13 pour développer l'interface utilisateur du tableau de bord.
Établir une communication en temps réel avec la serre intelligente en utilisant des technologies IoT.


Prototype de serre intelligente :
Concevoir et construire un prototype de serre intelligente en utilisant des capteurs, des actionneurs et l'Internet des objets (IoT).
Les capteurs surveilleront les paramètres environnementaux de la serre tels que la température, l'humidité, la luminosité, etc.
Les actionneurs permettront de contrôler les conditions internes de la serre, par exemple, en ajustant l'éclairage ou l'arrosage automatiquement.
Utiliser des technologies telles que l'Arduino pour la gestion des capteurs et des actionneurs.


Application Flutter pour les agriculteurs :
Créer une application mobile Flutter pour les agriculteurs afin de surveiller l'état de la serre intelligente et recevoir des notifications en cas de problèmes.
Utiliser des capteurs connectés à la serre intelligente pour recueillir des données environnementales.
Envoyer des notifications aux agriculteurs en cas de conditions anormales telles que des températures élevées, une humidité excessive, etc.


Système de quiz et récompenses :
Implémenter un système de quiz pour évaluer les connaissances et les résultats des agriculteurs.
Récompenser les agriculteurs qui obtiennent de bons résultats en leur offrant des avantages ou des réductions sur les produits de la serre intelligente.


Interface d'administration :
Créer une interface d'administration pour les administrateurs afin de gérer les avis des agriculteurs, les commandes, les utilisateurs et surveiller les statistiques du site web.
Utiliser des technologies telles que Angular 13 pour développer l'interface d'administration.
Permettre aux administrateurs de gérer les données et de prendre des décisions basées sur les informations collectées.


Feedback des agriculteurs :
Solliciter les avis des agriculteurs qui utilisent les serres intelligentes pour recueillir leurs expériences d'utilisation et leurs suggestions d'amélioration.
En utilisant les technologies suivantes : Angular 13, Express.js, Sequelize, MySQL, NoSQL, l'API Nodemailer pour les e-mails, Flutter, l'IoT et Arduino.

Ces éléments vous permettront de créer une application e-commerce complète pour une serre intelligente, en offrant aux agriculteurs une plateforme pour acheter des serres, surveiller leur état, contrôler les paramètres de croissance et interagir avec le système.


## Steps for Project Execution :
```
- git clone https://github.com/Rabiezouita11/pfe-Master.git
```

##### configuration Base de données  pour site e-commerce
```
Créer une base de données Sql  appelée "ecommerce".
```


##### configuration Base de données  pour tableau de bord de contrôleq 
```
Créer une base de données Sql  appelée "dashboard".
```


##### Server Install pour site e-commerce
```
cd ecommerce-backend  
npm install 
npm run dev 
```
##### Client Install  pour site e-commerce
```
cd ecommerce-fronted
npm install --force
ng serve 
```
##### Server Install pour  tableau de bord de contrôle
```
cd dashboard\backend
npm install 
npm run dev 
```
##### Client Install  pour tableau de bord de contrôle
```
cd dashboard\fronted
npm install --force
ng serve
```

##### configuration email (Server : backend ) : 
```
cd ecommerce-backend
update file (pfe-Master\ecommerce-backend\.env) :
SECRET_KEY= "secret"
EMAIL_USER= 'votre email'
EMAIL_PASSWORD= 'votre mot de passe'
```
##### role 
```
Client : user
Admin : admin
agriculteur : Agriculteur
```

##### configuration base donner  firebase (Server : backend ) pour site e-commerce : 
```
cd ecommerce-backend
update file (ecommerce-backend\firebaseConfg.js) :

const firebase = require("firebase");
const app = firebase.initializeApp({
    apiKey: "votre apikey"
    authDomain: "votre authDomain"
    databaseURL: "votre databaseUrl",
});
module.exports = app;
```
##### configuration base donner  firebase (Server : backend ) pour tableau de bord de contrôle : 
```
cd dashboard\backend
update file (dashboard\backend\firebase\firebaseConfg.js) :

const firebase = require("firebase");
const app = firebase.initializeApp({
    apiKey: "votre apikey"
    authDomain: "votre authDomain"
    databaseURL: "votre databaseUrl",
});
module.exports = app;
```


<table>
<thead>
<tr>
<th>Area</th>
<th>Technology</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Front-End</td>
		<td>Angular 13 , Bootstrap, HTML5, CSS3, Typescript</td>
	</tr>
	<tr>
		<td>Back-End</td>
		<td>Express, Node.js</td>
	</tr>
  <tr>
		<td>Authentication</td>
		<td>JWT(JSON Web Tokens)</td>
	</tr>
	<tr>
		<td>API Testing</td>
		<td>Postman</td>
	</tr>
	<tr>
		<td>Database</td>
		<td>Sql , firebase</td>
	</tr>
  <tr>
		<td>Images Storage</td>
		<td>locale</td>
	</tr>
    <tr>
		<td>Other APIs Used</td>
		<td>Stripe Payment,api map , API de géolocalisation , API email </td>
	</tr>
</tbody>
</table>

## Demo 1 


https://github.com/Rabiezouita11/pfe-Master/assets/91283165/86e3b3ce-b856-4a65-885f-0c0cf4dfad19

## Demo 2


https://github.com/Rabiezouita11/pfe-Master/assets/91283165/40c4fb11-7d4b-4813-baa5-565f86b2b2e6




## Screenshots

##### Base de données  firebase 

![firebae 3](https://github.com/Rabiezouita11/pfe-Master/assets/91283165/f5d7fe4f-c4fa-42c5-b9b3-523740d993a7)

![firebase](https://github.com/Rabiezouita11/pfe-Master/assets/91283165/07211ce4-5e12-4724-9c2a-559840aa4ffe)

![firebase2](https://github.com/Rabiezouita11/pfe-Master/assets/91283165/a506e02f-22ed-48ad-969d-9a29c892516f)


#####  prototype serres intillegents

![3202ab00-bf77-4901-bd64-b66892b8ee61photo](https://github.com/Rabiezouita11/pfe-Master/assets/91283165/15a659ce-3155-419f-9a42-9d11db0a43f3)
![20230531_164848_(1)](https://github.com/Rabiezouita11/pfe-Master/assets/91283165/53d33ccb-1e67-4b65-b222-6c4d603e9c98)
![20230531_164900](https://github.com/Rabiezouita11/pfe-Master/assets/91283165/e5f93173-ef1c-459a-b91a-05acdc4e6d89)

## lien pour présentation de projet:
https://www.canva.com/design/DAFjflsdjnA/0sL3ErnfAGLEN_4_CbarxQ/edit?utm_content=DAFjflsdjnA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton


