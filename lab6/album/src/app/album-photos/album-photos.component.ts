import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { AlbumDetailPhotosAPIService } from './service/album-photos-api.service';
import { Photo } from './service/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
})
export class AlbumPhotosComponent {
  photos!: Photo[];

  constructor(
    private api: AlbumDetailPhotosAPIService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  back() {
    this.location.back();
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.api.getAlbumPhotos(id).subscribe((photos) => (this.photos = photos));
  }
}
