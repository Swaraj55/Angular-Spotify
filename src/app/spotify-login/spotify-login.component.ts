import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.scss']
})
export class SpotifyLoginComponent implements OnInit {

  isSubmitted: Boolean = false;
  loginForm: FormGroup = new FormGroup({});
  url: string;
  constructor(private formBuilder: FormBuilder,

    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      clientID: ['', [Validators.required]],
      clientSecret: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    let payload = {
      clientID: this.loginForm.controls['clientID'].value,
      clientSecret: this.loginForm.controls['clientSecret'].value
    }
    localStorage.setItem('ClientID', payload.clientID);
    localStorage.setItem('ClientSecretID', payload.clientSecret)

    console.log(payload);
    this.url = 'https://accounts.spotify.com/authorize' + '?response_type=code' + 
    '&client_id=' + payload.clientID + '&redirect_uri=' + encodeURIComponent('https://ngppotify-music-app.herokuapp.com/homepage'); 
    window.location.href = this.url
  }

}
