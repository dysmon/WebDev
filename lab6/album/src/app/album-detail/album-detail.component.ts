import { Component, ChangeDetectorRef} from '@angular/core';
import { Album } from '../album-list/service/album';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumListComponent } from '../album-list/album-list.component';
import { AlbumListApiService } from '../album-list/service/album-list-api.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AlbumListComponent],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private api: AlbumListApiService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.album = this.api.albums.find((item) => item.id == id);
  }

  back() {
    this.location.back();
  }
}
