import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'weeklyLeaderBoard', component: FirstComponent },
  { path: 'rank', component: ThirdComponent },
  { path: 'leaderboardByCountry', component: SecondComponent },
  { path: '**', component: FirstComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
