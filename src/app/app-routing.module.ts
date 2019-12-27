import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialListComponent } from './components/credential-list/credential-list.component';


const routes: Routes = [
  { path: "credentials", component: CredentialListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [CredentialListComponent];
