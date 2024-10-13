import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { AppComponent } from './app/app.component';

enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),  // Provide HttpClientModule
    provideRouter(appRoutes)  // Providing routes for the application
  ]
}).catch(err => console.error(err));