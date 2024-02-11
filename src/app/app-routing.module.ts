import { MobileComponent } from './mobile/mobile.component';
import { WebComponent } from './web/web.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path:'home',component:HomeComponent , title:'Home'},
  {path:'about',component:AboutComponent, title:'About'},
  {path:'gallery',component:GalleryComponent, title:'Gallery', children:[
    {path:'',redirectTo:'web' , pathMatch:'full'},
    {path:'web',component:WebComponent , title:'Web'},
    {path:'mobile',component:MobileComponent , title:'Mobile'},
  ]}, 
  {path:'contact',component:ContactComponent, title:'Contact'}, 
  {path:'**',component:NotfoundComponent, title:'Not Found'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
