import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TwitListComponent } from './Twiter/twit-list.component';
import { NavigatorBarComponent } from './Infra/Navigator.Bar.component';
import { ViewModeValue } from './Infra/enums';
import { MainFormComponent } from './Forms/main.form.component';

import { CoursesComponent } from './FirstExample/courses.component';

import { StarComponent } from './Infra/star.component';
import { HeartComponent } from './Infra/heart.component';
import { VoterComponent, VoteValue } from './Infra/voter.component';
import { ZippyComponent } from './Infra/zippy.component';
import { Collapse } from './Directives/collapse.directive';
import { Enums } from './Infra/Enums';

import { TwitComponent } from './Twiter/twit.component';
import { TwitAutorsService } from './Twiter/twitAutors.service';
import { SummaryPipe } from './Infra/Pipes/summary.pipe';
import { UserFormComponent } from './Forms/user.form.component';
import { SignUpFormComponent } from './Forms/signup-form.component';
import { ChangePasswordFormComponent } from './Forms/change.password.form.component';

import { TextFinderComponent } from './Work/text.finder.component';

import { routing } from './app.routes';
import { SpotifyService } from './Services/spotify.service';
import { QuoteService } from './Services/quote.service.';
import { TextFinderFormService } from './Work/text.finder.form.service'
import { TextFinderFormComponent } from './Work/text.finder.form.component'

import { TextFinderWordComponent } from './Work/text.finder.word.component'
import { CustomdropdownDirective } from './Work/drop.down.context.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing, ReactiveFormsModule],
  declarations: [AppComponent, HeartComponent,
    NavigatorBarComponent, Collapse, CustomdropdownDirective,
    ZippyComponent, VoterComponent,
    TwitListComponent, TwitComponent,
    SummaryPipe, TextFinderComponent,
    MainFormComponent, UserFormComponent, SignUpFormComponent,
    ChangePasswordFormComponent, TextFinderWordComponent, TextFinderFormComponent],
  bootstrap: [AppComponent],
  providers: [TwitAutorsService, SpotifyService, QuoteService, TextFinderFormService]
})
export class AppModule { }
