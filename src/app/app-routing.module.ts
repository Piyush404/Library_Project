import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { RestComponent} from './rest/rest.component';

const routes: Routes = [{path: '', component: LoginComponent},
{path: 'home', component: HomeComponent},
{path: 'nav', component: NavComponentComponent},
{​​​​​path:'rest', component: RestComponent}​​​​​,
{path: 'contact', component: ContactComponent},
{path: 'add-book', component: AddBookComponent},
{path: 'admin', component: AdminComponent},
{path: 'remove-book', component: RemoveBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }

export const routingComponent = [LoginComponent, HomeComponent, RestComponent, ContactComponent, AddBookComponent, AdminComponent, RemoveBookComponent] 

  