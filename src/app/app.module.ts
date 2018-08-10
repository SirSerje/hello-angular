import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {SingleImageComponent} from './single-image/single-image.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ImageDetailComponent} from './image-detail/image-detail.component';

const appRoutes : Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'image/:id',
    component: ImageDetailComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SingleImageComponent,
    DashboardComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
