import { Component } from '@angular/core';
import { AlbumListApiService } from './service/album-list-api.service';
import { Album } from './service/album';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
})
export class AlbumListComponent {
  albums!: Album[];

  constructor(private api: AlbumListApiService) {}

  ngOnInit() {
    this.albums = this.api.albums;
  }

  delete(id: number) {
    this.api.deleteAlbumById(id);
    this.albums = this.albums.filter((data) => data.id != id);
  }

  create() {
    let album = {
      id: 0,
      title: 'dummy',
      userId: 0,
    };
    this.api.createAlbum(album);
    this.albums.unshift(album);
  }
}
