import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StreamComponent } from './streams/stream/stream.component';
import { LikeSharesComponent } from './like and shares/like-shares/like-shares.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';
import { SongComponent } from './streams/stream/song/song/song.component';
import { ArtistComponent } from './streams/stream/artist/artist.component';
import { AlbumComponent } from './streams/stream/album/album.component';
import { MostLikedSongComponent } from './like and shares/most-liked-song/most-liked-song.component';
import { MostLikedArtistComponent } from './like and shares/most-liked-artist/most-liked-artist.component';
import { MostLikedAlbumComponent } from './like and shares/most-liked-album/most-liked-album.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
              path: 'streams',
              component: StreamComponent,
            },
            {
              path: 'likeShares',
              component: LikeSharesComponent
            }
        ]
    },
    
];
@NgModule({
    declarations: [DashboardComponent, StreamComponent, LikeSharesComponent, SongComponent, ArtistComponent, AlbumComponent, MostLikedSongComponent, MostLikedArtistComponent, MostLikedAlbumComponent],
    imports: [
        LayoutModule,
        SharedModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: []
})
export class DashboardModule { }