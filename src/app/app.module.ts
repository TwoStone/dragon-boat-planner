import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';

import { BoatModule } from './boat/boat.module';
import { StorageModule } from './storage/storage.module';
import { StorageService } from './storage/storage.service';
import { DashboardModule } from './dashboard/dashboard.module';

import { PaddlerModule } from './paddler';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule.forRoot(),
    StorageModule.local(),
    DashboardModule,
    BoatModule,
    PaddlerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
