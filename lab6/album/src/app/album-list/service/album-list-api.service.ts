import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './album';
import { BASE_URL } from '../../baseurl';

@Injectable({
  providedIn: 'root',
})
export class AlbumListApiService {
  private url = 'albums';
  albums!: Album[];

  constructor(private http: HttpClient) {
    this.getAlbums().subscribe((data) => (this.albums = data));
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${BASE_URL}${this.url}`);
  }

  deleteAlbumById(id: number) {
    this.http
      .delete(`${BASE_URL}${this.url}/${id}`)
      .subscribe((response) => console.log(response));
  }

  createAlbum(album: Album) {
    this.http
      .post(`${BASE_URL}${this.url}`, album)
      .subscribe((data) => console.log(data));
  }
}
