import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
