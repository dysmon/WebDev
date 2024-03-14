import { Component } from '@angular/core';
import { AlbumListApiService } from './service/album-list-api.service';
import { Album } from './service/album';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
})
export class AlbumListComponent {
  albums!: Album[];
  newAlbum: string = '';
  private static id = 1000;

  constructor(private api: AlbumListApiService) {}

  ngOnInit() {
    this.albums = this.api.albums;
  }

  delete(id: number) {
    let ind = this.albums.findIndex((data) => data.id == id);
    this.albums.splice(ind, 1);
  }

  create() {
    let album = {
      id: ++AlbumListComponent.id,
      title: this.newAlbum,
      userId: 0,
    };
    if (this.newAlbum !== '') {
      this.albums.unshift(album);
    }
  }
}
