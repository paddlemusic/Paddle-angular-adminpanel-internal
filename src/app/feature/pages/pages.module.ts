import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './routing/pages-routing/pages-routing.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './admin-profile/edit-profile/edit-profile.component';
import { SongListingComponent } from './manage-songs/song-listing/song-listing.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [ PagesComponent, EditProfileComponent, SongListingComponent, TermsAndConditionsComponent, PrivacyPolicyComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
