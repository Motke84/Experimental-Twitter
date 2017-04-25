

import { Router, RouterModule } from '@angular/router';

import { TwitListComponent } from './Twiter/twit-list.component';
import { UserFormComponent } from './Forms/user.form.component';
import { SignUpFormComponent } from './Forms/signup-form.component';
import { ChangePasswordFormComponent } from './Forms/change.password.form.component';

import { TextFinderFormComponent } from './Work/text.finder.form.component'

export const routing = RouterModule.forRoot([
  { path: 'twiter/:mode', component: TwitListComponent },
  { path: 'addAuthor', component: UserFormComponent },
  { path: 'signIn', component: SignUpFormComponent },
  { path: '', component: ChangePasswordFormComponent },
  { path: 'work', component: TextFinderFormComponent }
]);
