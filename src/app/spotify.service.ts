import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyUrl = 'https://api.spotify.com/v1';
  constructor(
    private httpClient: HttpClient
  ) { }


  getAuthToken(codes) {
    let clientID = localStorage.getItem('ClientID');
    let clientSecret = localStorage.getItem('ClientSecretID');
    let encodeClient = btoa(clientID + ":" + clientSecret);
    console.log(encodeClient)

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${encodeClient}`
    });

    let params = new HttpParams();
    params = params.set('grant_type', 'authorization_code');
    params = params.set('code', `${codes}`);
    params = params.set('redirect_uri', 'http://localhost:4200/homepage');
    let body = params.toString();

    return this.httpClient.post('https://accounts.spotify.com/api/token', body, {headers: headers})
  }


  huntMusic(music: string,type='artist') {
    let access_token = sessionStorage.getItem('access_token')
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${music}&type=${type}&market=US&offset=0`, {headers: headers})
  }

  getAnArtist(id) {
    let access_token = sessionStorage.getItem('access_token')
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });

    return this.httpClient.get(`https://api.spotify.com/v1/artists/${id}`, {headers: headers});
  }

  getAnAlbums(id) {
    let access_token = sessionStorage.getItem('access_token')
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });

    return this.httpClient.get(`https://api.spotify.com/v1/artists/${id}/albums`, {headers: headers});
  }

  getAlbumDetails(id) {
    let access_token = sessionStorage.getItem('access_token')
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`
    });

    return this.httpClient.get(`https://api.spotify.com/v1/albums/${id}`, {headers: headers})
  }
}
