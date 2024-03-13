import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../baseurl';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumDetailPhotosAPIService {
  private url = 'albums/';

  constructor(private http: HttpClient) {}

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${BASE_URL}${this.url}${id}/photos`);
  }
}
