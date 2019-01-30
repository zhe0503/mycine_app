import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { AllListComponent } from './all-list/all-list.component';
import { ProfileComponent } from './profile/profile.component';
import { BaseItemComponent } from './base-item/base-item.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mylist', component:  MyListComponent},
  { path: 'alllist', component: AllListComponent},
  { path: 'profile', component: ProfileComponent},

  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ArticleComponent,
    MyListComponent,
    AllListComponent,
    ProfileComponent,
    BaseItemComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
