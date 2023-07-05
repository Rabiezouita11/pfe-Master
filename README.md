
# Modélisation et mise en place une application web e-commerce (serre intelligente)

## Steps for Project Execution :


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

## Demo 


https://github.com/Rabiezouita11/pfe-Master/assets/91283165/86e3b3ce-b856-4a65-885f-0c0cf4dfad19




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


