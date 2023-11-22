import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureComponent } from './capture/capture.component';
import { PlayerComponent } from './index/player.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [
  {
    path: '', component: PlayerComponent, //pathMatch: 'full'
  },
  {
    path: 'Player', component: PlayerComponent, //pathMatch: 'full'
  },
  {
    path: 'Capture', component: CaptureComponent, //pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    CaptureComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class PlayerModule { }
