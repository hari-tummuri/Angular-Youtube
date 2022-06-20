import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './component/create/create.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegesterComponent } from './component/regester/regester.component';
import { VideoComponent } from './component/video/video.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'video/:id', component: VideoComponent },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [RouteGuardService],
  },
  { path: 'register', component: RegesterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
