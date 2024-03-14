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

  private getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${BASE_URL}${this.url}`);
  }
}
