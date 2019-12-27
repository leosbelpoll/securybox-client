import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialListComponent } from './components/credential-list/credential-list.component';
import { CredentialDetailComponent } from './components/credential-detail/credential-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "credentials", component: CredentialListComponent },
    { path: "credentials/:id", component: CredentialDetailComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
    CredentialListComponent,
    CredentialDetailComponent,
    PageNotFoundComponent,
    DashboardComponent
];
