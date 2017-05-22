
import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';
import { HeartComponent } from './heart.component';
import { VoterComponent, VoteValue } from './voter.component';
import { ZippyComponent } from './zippy.component';
import { Collapse } from '../Directives/collapse.directive';
import { NavigatorBarComponent } from './Navigator.Bar.component';
import { SpinnerComponent } from './spinner.component';
import { PaginationComponent } from './pagination.component';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './Pipes/summary.pipe';
import { Router, RouterModule } from '@angular/router';
import { ViewModeValue, Enums } from './enums';


@NgModule({
    imports: [CommonModule, RouterModule],

    exports: [HeartComponent, StarComponent, SummaryPipe,
        NavigatorBarComponent, Collapse, PaginationComponent,
        ZippyComponent, VoterComponent, SpinnerComponent],

    declarations: [HeartComponent, StarComponent, SummaryPipe,
        NavigatorBarComponent, Collapse, PaginationComponent,
        ZippyComponent, VoterComponent, SpinnerComponent],

    providers: [],
})
export class InfraModule { }
