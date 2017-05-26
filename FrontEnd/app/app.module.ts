import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InfraModule } from './Infra/infra.module';


import { TwitListComponent } from './Twiter/twit-list.component';
import { TwitComponent } from './Twiter/twit.component';
import { TwitAutorsService } from './Twiter/twitAutors.service';

import { UserFormComponent } from './Forms/user.form.component';
import { SignUpFormComponent } from './Forms/signup-form.component';
import { ChangePasswordFormComponent } from './Forms/change.password.form.component';
import { TwitFollowersComponent } from './Twiter/twit.followers.component';

import { routing } from './app.routes';
import { formRouting } from './Forms/form.routes';

import { SpotifyService } from './Services/spotify.service';
import { QuoteService } from './Services/quote.service.';
import { FollowersService } from './Services/followers.service';
import { KeepChangesGuard } from './Services/keep.changes.guard.service';
import { AnimationameComponent } from "./Infra/animate.component";


@NgModule({
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    formRouting, //must be before main routing
    routing,
    ReactiveFormsModule,
    InfraModule 
   ],

  declarations: [AppComponent,
    TwitListComponent, 
    TwitComponent,
    TwitFollowersComponent,
    UserFormComponent,
    SignUpFormComponent,
    ChangePasswordFormComponent,
    AnimationameComponent],

  bootstrap: [AppComponent],

  providers:
  [TwitAutorsService,
    KeepChangesGuard,
    SpotifyService,
    QuoteService,
    FollowersService]
})
export class AppModule { }
