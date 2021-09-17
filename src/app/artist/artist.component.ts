import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Albums } from 'Albums';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  id: string;
  albums: Albums[];
  artist: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.id = params['params'].id;
    });
    this.spotifyService.getAnArtist(this.id).subscribe((data) => {
      console.log(data);
      this.artist = data;
    });

    this.spotifyService.getAnAlbums(this.id).subscribe((data) => {
      this.albums = data['items'];
      console.log(this.albums);
    })
  }

  getAlbumId(id) {
    this.router.navigate(['/album-details'], {queryParams: {album_id: `${id}`}})
  }

}
