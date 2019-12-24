import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialListComponent } from './components/credential-list/credential-list.component';
import { CredentialService } from './services/CredentialService';

@NgModule({
  declarations: [
    AppComponent,
    CredentialListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CredentialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
