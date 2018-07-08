import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { MainService } from './main.service';
import { MainViewComponent } from './user/u-main/main-view/main-view.component';
import { AboutMeComponent } from './user/u-main/about-me/about-me.component';
import { UserComponent } from './user/user.component';
import { UMainComponent } from './user/u-main/u-main.component';
import { StackComponent } from './user/u-main/stack/stack.component';
import { WorksComponent } from './user/u-main/works/works.component';
import { FooterComponent } from './footer/footer.component';
import { UAboutComponent } from './user/u-about/u-about.component';
import { UBlogComponent } from './user/u-blog/u-blog.component';
import { AdminComponent } from './admin/admin.component';
import { AMainComponent } from './admin/a-main/a-main.component';
import { ABlogComponent } from './admin/a-blog/a-blog.component'; 
import { AAboutComponent } from './admin/a-about/a-about.component';



const routes: Routes = [
  { path: "admin", component: AdminComponent,  children: [
    { path: "", redirectTo: "main", pathMatch: 'full' },
    { path: "main",  component: AMainComponent },
    { path: "blog",  component: ABlogComponent },
    { path: "about",  component: AAboutComponent }
  ]},
  { path: "", redirectTo: "main", pathMatch: 'full'},
  { path: "main", component: UserComponent,  children: [
    { path: "",  component: UMainComponent, pathMatch: 'full'}, 
    { path: "blog",  component: UBlogComponent },
    { path: "about", component: UAboutComponent },
  ]}, 
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainViewComponent,
    AboutMeComponent,
    UserComponent,
    UMainComponent,
    StackComponent,
    WorksComponent,
    FooterComponent,
    UAboutComponent,
    UBlogComponent,
    AdminComponent,
    AMainComponent,
    ABlogComponent,
    AAboutComponent

  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
 
  ], 
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  