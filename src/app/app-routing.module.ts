import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent, AddContactComponent } from './pages';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  /*{path: '', redirectTo:'contact', pathMatch: 'full'},*/
  { path: '', component: ContactComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
