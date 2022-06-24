import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { CreateComponent } from './component/create/create.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegesterComponent } from './component/regester/regester.component';
import { VideoComponent } from './component/video/video.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from './safe-pipe.pipe';
import { EditComponent } from './component/edit/edit.component';
import { MyVideosComponent } from './component/my-videos/my-videos.component';
import { LogoutComponent } from './component/logout/logout.component';
import { SearchResultsComponent } from './component/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    HomeComponent,
    NavbarComponent,
    RegesterComponent,
    VideoComponent,
    SafePipePipe,
    EditComponent,
    MyVideosComponent,
    LogoutComponent,
    SearchResultsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
