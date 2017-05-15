

import { Router, RouterModule } from '@angular/router';

import { UserFormComponent } from './user.form.component';
import { SignUpFormComponent } from './signup-form.component';
import { ChangePasswordFormComponent } from './change.password.form.component';


import { KeepChangesGuard } from '../Services/keep.changes.guard.service';

export const formRouting = RouterModule.forRoot([

  { path: 'addAuthor/:id', component: UserFormComponent, canDeactivate: [KeepChangesGuard] },
  { path: 'addAuthor/new', component: UserFormComponent, canDeactivate: [KeepChangesGuard] },
  { path: 'signIn', component: SignUpFormComponent },
]);
