import { Component } from '@angular/core';
import { Album } from '../album-list/service/album';
import { CommonModule, Location } from '@angular/common';
import { AlbumDetailAPIService } from './service/album-detail-api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumListComponent } from '../album-list/album-list.component';
import { AlbumListApiService } from '../album-list/service/album-list-api.service';
import { title } from 'process';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AlbumListComponent],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent {
  album!: Album;

  constructor(
    private http: AlbumDetailAPIService,
    private route: ActivatedRoute,
    private location: Location,
    private api: AlbumListApiService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.http.getAlbum(id).subscribe((album) => (this.album = album));
  }

  back() {
    this.location.back();
  }

  save(id: number) {
    this.api.albums[id].title = this.album.title;
    this.http.saveChanges(this.album);
  }
}
