import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    private relatedArtistsUrl: string;

    constructor(private _http: Http) {

    }
    searchMusic(str: string, type = 'artist') {
      this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str +
        '&type=' + type +
        '&market=US' +
        '&offset=0&limit=20';
      return this._http.get(this.searchUrl)
        .map(res => res.json());
    }
    getArtist(id:string) {
      this.artistUrl = 'https://api.spotify.com/v1/artists/' + id
      return this._http.get(this.artistUrl)
        .map(res => res.json());
    }
    getAlbums(artistId:string) {
      this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums'
      return this._http.get(this.albumsUrl)
        .map(res => res.json());
    }
    getAlbum(albumId:string) {
      this.albumUrl = 'https://api.spotify.com/v1/albums/' + albumId
      return this._http.get(this.albumUrl)
        .map(res => res.json());
    }
    getRelatedArtists(artistId:string) {
      this.relatedArtistsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/related-artists'
      return this._http.get(this.relatedArtistsUrl)
        .map(res => res.json());
    }
}



