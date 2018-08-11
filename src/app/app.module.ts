import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SingleImageComponent} from './single-image/single-image.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ImageDetailComponent} from './image-detail/image-detail.component';
import { ImageAddComponent } from './image-add/image-add.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'image/:id',
    component: ImageDetailComponent
  },
  {
    path: 'add',
    component: ImageAddComponent
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
    ImageDetailComponent,
    ImageAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
