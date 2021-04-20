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
import { AppAnalyticsComponent } from './app-analytics/app-analytics/app-analytics.component';
import { AppUsageComponent } from './app-analytics/app-usage/app-usage.component';
import { AppSignupComponent } from './app-analytics/app-signup/app-signup.component';
import { OpeningTwoOrMoreTimesPerDayComponent } from './app-analytics/opening-two-or-more-times-per-day/opening-two-or-more-times-per-day.component';
// import { OpeningAtleastOnceADayComponent } from './app-analytics/opening-atleast-once-a-day/opening-atleast-once-a-day.component';
// import { OpeningAtleastOnceAWeekComponent } from './app-analytics/opening-atleast-once-a-week/opening-atleast-once-a-week.component';
import { AuthGuard } from '@app/core/interceptors/guards/auth.guard';
import { PostAnalyticsComponent } from './app-analytics/post-analytics/post-analytics.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent,
                canActivate : [AuthGuard]
            },
            {
              path: 'streams',
              component: StreamComponent,
            },
            {
              path: 'likeShares',
              component: LikeSharesComponent
            },
            {
                path : 'application',
                component: AppAnalyticsComponent
            }
        ]
    },
    
];
@NgModule({
    declarations: [DashboardComponent, StreamComponent, LikeSharesComponent, SongComponent, ArtistComponent, AlbumComponent, MostLikedSongComponent, MostLikedArtistComponent, MostLikedAlbumComponent, AppAnalyticsComponent, AppUsageComponent, AppSignupComponent, OpeningTwoOrMoreTimesPerDayComponent, PostAnalyticsComponent],
    imports: [
        LayoutModule,
        SharedModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: []
})
export class DashboardModule { }