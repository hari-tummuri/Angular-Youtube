import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MyVideosComponent } from './component/my-videos/my-videos.component';
import { RegesterComponent } from './component/regester/regester.component';
import { SearchResultsComponent } from './component/search-results/search-results.component';
import { VideoComponent } from './component/video/video.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path:'logout',component:LogoutComponent,canActivate: [RouteGuardService],},
  { path: 'video/:id', component: VideoComponent },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [RouteGuardService],
  },
  {path:'search/:searchString',component:SearchResultsComponent},
  { path: 'edit/:id', component: EditComponent, canActivate: [RouteGuardService] },
  {path:'myVideos',component:MyVideosComponent,canActivate:[RouteGuardService]},
  { path: 'register', component: RegesterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
