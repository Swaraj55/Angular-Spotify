import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Albums } from 'Albums';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album_id: string;
  album_details: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      console.log(params)
      this.album_id = params['params'].album_id;
    });

    this.spotifyService.getAlbumDetails(this.album_id).subscribe((data) => {
      console.log(data)
      this.album_details = data;
    })
  }

}
