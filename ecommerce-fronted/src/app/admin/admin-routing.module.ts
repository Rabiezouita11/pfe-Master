import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CategoryComponent} from "./category/category.component";
import {ProductComponent} from "./product/product.component";
import {AjouterProductComponent} from "./product/ajouter-product/ajouter-product.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";
import {AjouterCategoryComponent} from "./category/ajouter-category/ajouter-category.component";
import {QuizComponent} from "./quiz/quiz.component";
import {AjouterQuizComponent} from "./quiz/ajouter-quiz/ajouter-quiz.component";
import {UpdateQuizComponent} from "./quiz/update-quiz/update-quiz.component";
import {ProfileComponent} from "./profile/profile.component";
import {PromotionComponent} from "./promotion/promotion.component";
import {AjouterPromotionComponent} from "./promotion/ajouter-promotion/ajouter-promotion.component";
import {UpdatePromotionComponent} from "./promotion/update-promotion/update-promotion.component";
import {ClientComponent} from "./client/client.component";
import {CommandeComponent} from "./commande/commande.component";
import {EtatCommandeComponent} from "./commande/etat-commande/etat-commande.component";
import {LivreurComponent} from "./livreur/livreur.component";
import {AjouterLivreurComponent} from "./livreur/ajouter-livreur/ajouter-livreur.component";
import {UpdateLivreurComponent} from "./livreur/update-livreur/update-livreur.component";
import {ContactComponent} from "./contact/contact.component";
import { AvisComponent } from './avis/avis.component';
import { EtatDeSerreComponent } from './etat-de-serre/etat-de-serre.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AjouterAbonnementComponent } from './abonnement/ajouter-abonnement/ajouter-abonnement.component';
import { ListeDemandeAbonnementComponent } from './liste-demande-abonnement/liste-demande-abonnement.component';
import { GuardAgricultureAdminGuard } from '../guard/guard-agriculture-admin.guard';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' , data: {title: 'Administrateur'}},
  { path: 'dashboard', component: DashboardComponent , data: {title: 'Administrateur'} , canActivate : [GuardAgricultureAdminGuard]},
  { path: 'category', component: CategoryComponent , data: {title: 'Administrateur'}},
  { path: 'category/ajouterCategory', component: AjouterCategoryComponent , data: {title: 'Product'} },
  { path: 'category/update/:id', component: AjouterCategoryComponent , data: {title: 'Product'} },

  { path: 'etat_de_serreIntellegent', component: EtatDeSerreComponent , data: {title: 'Administrateur'} , canActivate : [GuardAgricultureAdminGuard]},
  { path: 'AjouterAbonnement', component: AjouterAbonnementComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard] },
  { path: 'Abonnement', component: AbonnementComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard] },
  { path: 'ListDedemandeAbonnement', component: ListeDemandeAbonnementComponent , data: {title: 'Product'}  , canActivate : [GuardAgricultureAdminGuard]},


  
  { path: 'Listproduct', component: ProductComponent , data: {title: 'Product'} },
  { path: 'ajouterProduit', component: AjouterProductComponent , data: {title: 'Product'} },
  { path: 'UpdateProduct', component: UpdateProductComponent , data: {title: 'Product'} },
  { path: 'ListQuiz', component: QuizComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard] },
  { path: 'ajouterQuiz', component: AjouterQuizComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard]} ,
  { path: 'UpdateQuiz/:id', component: UpdateQuizComponent , data: {title: 'Product'}, canActivate : [GuardAgricultureAdminGuard] },
  { path: 'profile', component: ProfileComponent , data: {title: 'Product'} },
  { path: 'listPromotion', component: PromotionComponent , data: {title: 'Product'}, canActivate : [GuardAgricultureAdminGuard] } ,
  { path: 'ajouterPromotion', component: AjouterPromotionComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard]} ,
  { path: 'updatePromotion', component: UpdatePromotionComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard]} ,
  { path: 'client', component: ClientComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard] }  ,
  { path: 'Commande', component: CommandeComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard] } ,
  { path: 'EtatCommande', component: EtatCommandeComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard] }  ,
  { path: 'listlivreur', component: LivreurComponent , data: {title: 'Product'}  , canActivate : [GuardAgricultureAdminGuard] } ,
  { path: 'AjouterLivreur', component: AjouterLivreurComponent , data: {title: 'Product'}  , canActivate : [GuardAgricultureAdminGuard]} ,
  { path: 'UpdateLivreur', component: UpdateLivreurComponent , data: {title: 'Product'}  , canActivate : [GuardAgricultureAdminGuard]} ,
  { path: 'Contact', component: ContactComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard] },
  { path: 'avisAdmin', component: AvisComponent , data: {title: 'Product'} , canActivate : [GuardAgricultureAdminGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
