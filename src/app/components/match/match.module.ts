import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './index/match.component';
import { LayoutModule } from '../layout/layout.module';
import { CaptureComponent } from './capture/capture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '', component: MatchComponent, //pathMatch: 'full'
  },
  {
    path: 'Match', component: MatchComponent, //pathMatch: 'full'
  },
  {
    path: 'Capture', component: CaptureComponent, //pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    MatchComponent,
    CaptureComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ]
})
export class MatchModule { }
