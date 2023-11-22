import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from './components/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Match',
    loadChildren: () => import('./components/match/match.module').then(m => m.MatchModule),
  },
  {
    path: 'Player',
    loadChildren: () => import('./components/player/player.module').then(m => m.PlayerModule),
  },
];

@NgModule({
  declarations: [
    HomeComponent, 
  ],
  imports: [RouterModule.forRoot(routes), LayoutModule,   ],
  exports: [RouterModule  ]
})
export class AppRoutingModule { }
