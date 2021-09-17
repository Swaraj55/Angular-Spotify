import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'Artist';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  codes: string;
  music = new FormControl('');
  huntMusic: Artist[];
  
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe((params) => {
      this.codes = params['params'].code
    });

    this.spotifyService.getAuthToken(this.codes).subscribe((data) => {
      sessionStorage.setItem('access_token', data['access_token']);
      sessionStorage.setItem('refresh_token', data['refresh_token'])
    });
    this.handleFormChanges()
  }
  
  handleFormChanges() {
    this.music.valueChanges.subscribe((music) => {
      // console.log(music)
    })
  }

  SearchMusic() {
    let searchMusic = this.music.value;

    this.spotifyService.huntMusic(searchMusic).subscribe((data) => {
      this.huntMusic = data['artists']['items'];
    });
  };

  selectArtist(id) {
    this.router.navigate(['/artist'], {queryParams: {id: `${id}`}});
  }
}
