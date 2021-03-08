import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StreamComponent } from './streams/stream/stream.component';
import { LikeSharesComponent } from './like and shares/like-shares/like-shares.component';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';

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
    declarations: [DashboardComponent, StreamComponent, LikeSharesComponent],
    imports: [
        LayoutModule,
        SharedModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: []
})
export class DashboardModule { }