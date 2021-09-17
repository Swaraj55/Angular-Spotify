import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HomePageComponent } from './home-page/home-page.component';
import { SpotifyService } from './spotify.service';
import { ArtistComponent } from './artist/artist.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SpotifyLoginComponent,
    HomePageComponent,
    ArtistComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,

    RouterModule.forRoot([
      {path: '', component: SpotifyLoginComponent},
      {path: 'homepage', component: HomePageComponent},
      {path: 'artist', component: ArtistComponent},
      {path: 'album-details', component: AlbumDetailsComponent}
    ])
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
